import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";
import Spinner from "./Spinner";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);
  // min-h-[80vh] w-full flex justify-center items-center 
  return (
    <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px] pl-2 bg-slate-400 mx-auto">
      {loading ? (
        <div className=" max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px] pl-2 bg-slate-400">
          <Spinner />
          <p className="text-center font-bold text-3xl">Loading</p>
        </div>
      ) : posts.length === 0 ? (
        <div className=" max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px] pl-2 bg-slate-400">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
        posts.map((post) => (
          <BlogDetails key={post.id} post={post} />
        ))
      )}
    </div>
  );
}
