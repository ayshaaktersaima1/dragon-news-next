import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";



const NewsByCategory = async ({ params }) => {
    const { id } = await params;
    console.log(id)

    const categories = await getCategories();

    const news = await getNewsByCategoryId(id);
    return (
        <div>
            <div className="grid grid-cols-4 gap-4 text-center my-10">
                <LeftSidebar categories={categories} activeId={id}></LeftSidebar>
                <div className="text-3xl col-span-2 font-bold p-5  bg-pink-300">

                    <div className="space-y-4 ">
                        {news.data.length > 0 ?
                            news.data.map((n) => {
                                return <div key={n._id} className="border rounded-2xl p-3 text-lg font-light"><NewsCard n={n}></NewsCard></div>
                            }) :
                            'No no news'
                        }
                    </div>
                </div>
                <div className="col-span-1 text-3xl font-bold">
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default NewsByCategory;