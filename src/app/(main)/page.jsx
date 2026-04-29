import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import Image from "next/image";
import { redirect } from "next/navigation";

const defaultCategoryId = '01';

const Home = async () => {

  redirect(`/category/${defaultCategoryId}`)
}






// another approach
// const getCategories = async () => {
//   const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
//   const categories = await res.json();
//   return categories;
// }

// const getNewsByCategoryId = async (categoryId) => {
//   const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
//   const categories = await res.json();
//   return categories;
// }
// const Home = async () => {

//   const categories = await getCategories();

//   const news = await getNewsByCategoryId('01');
//   // console.log(getByCategory)
//   return (
//     <div className="grid grid-cols-4 gap-4 text-center my-10">
//       <LeftSidebar categories={categories} activeId={'01'}></LeftSidebar>
//       <div className="text-3xl col-span-2 font-bold  bg-pink-300">
//         All news
//         <div className="space-y-4 ">
//           {
//             news.data.map((n) => {
//               return <div key={n._id} className="border rounded-2xl p-3 text-lg font-light">{n.title}</div>
//             })
//           }
//         </div>
//       </div>
//       <div className="col-span-1 text-3xl font-bold">
//         <RightSidebar></RightSidebar>
//       </div>
//     </div>
//   );
// }

export default Home;
