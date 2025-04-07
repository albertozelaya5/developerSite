import { Link } from "react-router-dom";
import { Card } from "../ui/card";
import { apis } from "@/temp/heroData";

const Blogs = () => {
  return (
    <div className="w-full pt-24 mb-4 relative">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 ss:grid-cols-1 gap-8 px-4 h-full xl:px-20 lg:px-12 md:px-8">
          {apis.map((blog) => (
            <Link to={`/solutions/${blog.id}`} key={blog.id}>
              <div key={blog.id}>
                <div className="-left-4 -top-4 z-10 overflow-visible relative">
                  <img src={blog.src} alt="" className="w-9 absolute fill-current" />
                </div>
                <Card key={blog.id} className="">
                  <div className="w-full rounded-xl border bg-card text-card-foreground lg:max-h-[450px] lg:min-h-[450px] lg:relative xl:min-h-[420px]">
                    <div className={blog.srcColor}>
                      <img
                        className="h-56 w-full object-cover overflow-hidden opacity-60"
                        src="https://www.banhcafe.hn/_next/image?url=%2Fannouncement-1.webp&w=640&q=75"
                        alt="imgProgramas"
                      />
                    </div>
                    <div className="mx-6 my-2 divide-y-2 divide-gray-400">
                      <h3 className="font-semibold text-2xl my-1 text-card-foreground md:text-lg xl:text-2xl">
                        {blog.title}
                      </h3>
                      <p className="md:text-base pt-4">{blog.desc}</p>
                    </div>
                    <div
                      className={`w-full md:block py-3 ${blog.buttonColor} transition ease-out duration-200 text-white overflow-hidden rounded-b-lg px-6 font-semibold lg:absolute bottom-0`}
                    >
                      <a
                        href=""
                        className="hover:underline hover:underline-offset-2 capitalize underline underline-offset-2  md:px-0 "
                      >
                        Deseo saber más >>
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
