import { db, storage } from "./Firebase-config";
import {
  doc,
  getDoc,
  addDoc,
  collection,
  updateDoc,
  serverTimestamp,
  query,
  getDocs,
  where,
  limit,
  orderBy,
  getCountFromServer,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

class Post {
  constructor(id, data) {
    this.id = id;
    this.data = data;
  }
}

export async function getPost(docId, setPost) {
  const docRef = doc(db, "posts", docId);

  try {
    const doc = await getDoc(docRef);

    setPost(new Post(doc.id, doc.data()));
  } catch (error) {
    console.log("Error getting cached document:", error);
  }
}

export async function getLatestPosts(
  setPosts,
  postsFilter = "all",
  cardLimit = 5
) {
  try {
    const q = query(
      collection(db, "posts"),
      postsFilter !== "all" && where("tag", "==", postsFilter),
      orderBy("timestamp", "desc"),
      limit(cardLimit)
    );

    const posts = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => posts.push(new Post(doc.id, doc.data())));
    setPosts(posts);
  } catch (error) {
    console.log("Error getting cached document:", error);
  }
}

export async function getTrendingPosts(
  setPosts,
  postsFilter = "all",
  cardLimit = 5
) {
  try {
    const q = query(
      collection(db, "posts"),
      postsFilter !== "all" && where("tag", "==", postsFilter),
      orderBy("views", "desc"),
      limit(cardLimit)
    );

    const posts = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => posts.push(new Post(doc.id, doc.data())));
    setPosts(posts);
  } catch (error) {
    console.log("Error getting cached document:", error);
  }
}

export async function addPost(postData, colectionName) {
  try {
    const docRef = await addDoc(collection(db, colectionName), {
      author: {
        full_name: postData.author.fullName,
        job: postData.author.job,
      },
      body: postData.body,
      body_title: postData.bodyTitle,
      description: postData.description,
      read_time: postData.readTime,
      views: 0,
      tag: postData.tag,
      title: postData.title,
      timestamp: serverTimestamp(),
    });

    uploadAuthorPicture(
      docRef,
      postData.author.picture,
      postData.author.fullName,
      postData.author.job
    );

    uploadPostImg(docRef, postData.image);
  } catch (error) {
    console.error(
      "There was an error uploading a file to Cloud Storage:",
      error
    );
  }
}

export async function uploadPostImg(docRef, file) {
  try {
    const filePath = `${docRef.id}/${file.name}`;
    const newImageRef = ref(storage, filePath);
    const fileSnapshot = await uploadBytesResumable(newImageRef, file);
    const publicImageUrl = await getDownloadURL(newImageRef);

    await updateDoc(docRef, {
      image: {
        img_url: publicImageUrl,
        storage_uri: fileSnapshot.metadata.fullPath,
      },
    });
  } catch (error) {
    console.error(
      "There was an error uploading a file to Cloud Storage:",
      error
    );
  }
}

export async function uploadAuthorPicture(docRef, file, authorName, authorJob) {
  try {
    const filePath = `${docRef.id}/${file.name}`;
    const newImageRef = ref(storage, filePath);
    const fileSnapshot = await uploadBytesResumable(newImageRef, file);
    const publicImageUrl = await getDownloadURL(newImageRef);

    await updateDoc(docRef, {
      author: {
        full_name: authorName,
        job: authorJob,
        picture: {
          pic_url: publicImageUrl,
          storage_uri: fileSnapshot.metadata.fullPath,
        },
      },
    });
  } catch (error) {
    console.error(
      "There was an error uploading a file to Cloud Storage:",
      error
    );
  }
}

export async function incrementPostViews(docId) {
  const docRef = doc(db, "posts", docId);

  try {
    const doc = await getDoc(docRef);
    const newDoc = new Post(doc.id, doc.data());
    const currentViews = newDoc.data.views;

    await updateDoc(docRef, {
      views: currentViews + 1,
    });
  } catch (error) {
    console.log("Error getting cached document:", error);
  }
}

export async function getPostsCount(postsFilter = "all", setCount) {
  try {
    const q = query(
      collection(db, "posts"),
      postsFilter !== "all" && where("tag", "==", postsFilter)
    );

    const querySnapshot = await getCountFromServer(q);
    setCount(querySnapshot.data().count);
  } catch (error) {
    console.log("Error getting cached document:", error);
  }
}
