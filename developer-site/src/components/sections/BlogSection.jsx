import { Card } from "../ui/card";
import { apis } from "@/temp/heroData";

export const BlogsSection = () => {
  return (
    <div className="w-full pt-24 mb-4 static !scroll-smooth" id="blogs">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 ss:grid-cols-1 gap-8 px-4 h-full xl:px-20 lg:px-12 md:px-8">
          {apis.map((blog) => (
            <Card key={blog.id}>
              <div className="bg-card rounded-sm overflow-hidden drop-shadow-md min-h-[460px]">
                <img
                  className="h-56 w-full object-cover"
                  src="https://www.banhcafe.hn/_next/image?url=%2Fannouncement-1.webp&w=640&q=75"
                  alt="imgProgramas"
                />
                <div className="p-8">
                  <h3 className="font-semibold text-2xl my-1 text-card-foreground">{blog.title}</h3>
                  <p className="md:text-base">{blog.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};