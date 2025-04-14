import { PostService } from './05-dependency-b';
import { JSONDataBaseService, LocalDataBaseService, WebApiPostServiceProvider } from './05-dependency-c';


// Main
(async () => {

    // const postsProvider = new LocalDataBaseService();
    // const postsProvider = new JSONDataBaseService();
    const postsProvider = new WebApiPostServiceProvider();
    const postService = new PostService(postsProvider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();