import { useState } from "react";
import { addPost } from "./firebase/Firebase";
import { Editor } from "@tinymce/tinymce-react";

export default function Create() {
  const [postData, setPostData] = useState({
    body: "",
    bodyTitle: "",
    description: "",
    image: null,
    readTime: 0,
    tag: "bearings",
    title: "",
  });

  const [authorData, setAuthorData] = useState({
    fullName: "",
    job: "",
    picture: null,
  });

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ ...postData, author: { ...authorData } }, "posts");
        }}>
        <div>
          <label htmlFor="authorName">Author full name: </label>
          <input
            type="text"
            name="authorName"
            onChange={(e) =>
              setAuthorData({ ...authorData, fullName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="authorPosition">Author job: </label>
          <input
            type="text"
            name="authorPosition"
            onChange={(e) =>
              setAuthorData({ ...authorData, job: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="authorImg">Author picture: </label>
          <input
            type="file"
            name="authorImg"
            accept="image/*"
            onChange={(e) =>
              setAuthorData({ ...authorData, picture: e.target.files[0] })
            }
          />
        </div>
        <hr />
        <div>
          <label htmlFor="articleTitle">Post title: </label>
          <input
            type="text"
            name="articleTitle"
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </div>
        <label htmlFor="articleTags">Post tag: </label>
        <select
          name="articleTags"
          onChange={(e) => setPostData({ ...postData, tag: e.target.value })}>
          <option defaultValue="bearings">bearings</option>
          <option defaultValue="filters">filters</option>
          <option defaultValue="belts">belts</option>
        </select>
        <div>
          <label htmlFor="readTime">Post read time: </label>
          <input
            type="text"
            name="readTime"
            onChange={(e) =>
              setPostData({ ...postData, readTime: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="articleDescription">Post description: </label>
          <input
            type="text"
            name="articleDescription"
            onChange={(e) =>
              setPostData({ ...postData, description: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="articleImg">Post image: </label>
          <input
            type="file"
            name="articleImg"
            accept="image/*"
            onChange={(e) =>
              setPostData({ ...postData, image: e.target.files[0] })
            }
          />
        </div>
        <div>
          <label htmlFor="articleBodyTitle">Post body title: </label>
          <input
            type="text"
            name="articleBodyTitle"
            onChange={(e) =>
              setPostData({ ...postData, bodyTitle: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="articleText">Post body: </label>
          <Editor
            textareaName="articleText"
            initialValue="<p>write your content here</p>"
            init={{
              height: 400,
              menubar: false,
              plugins: [
                "image",
                "code",
                "table",
                "link",
                "media",
                "codesample",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={(newText) =>
              setPostData({ ...postData, body: newText })
            }
          />
        </div>
        <hr />
        <button type="submit">Submit</button>
        <button type="reset">Clear</button>
      </form>
    </section>
  );
}
