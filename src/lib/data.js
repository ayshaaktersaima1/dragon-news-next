export const getCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const categories = await res.json();
    return categories;
}

export const getNewsByCategoryId = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const categories = await res.json();
    return categories;
}
export const getIndividualNewsDetails = async (newsId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${newsId}`);
    const news = await res.json();
    return news;
}
