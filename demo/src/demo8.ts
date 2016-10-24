// https://jsonplaceholder.typicode.com/posts

import * as request from 'request';
const log = console.log;

/* Promises */
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface User {
    "id": number;
    "name": string;
}

class ArticleGenerator {
    private apiUrl: string = "https://jsonplaceholder.typicode.com";

    getAll(): void {
        this.retrieveArticles().then(data => {
            let posts: Post[] = JSON.parse(data);
            log(posts);
        }).catch(err => {
            console.error(err);
        })
    }

    getById(id: number): void {
        this.retrieveArticles(id).then(data => {
            let post: Post = JSON.parse(data);
            log(post);
        }).catch(err => {
            console.error(err);
        })
    }

    getByIdWithUserInfo(id: number): void {
        this.retrieveArticles(id).then(data => {
            let post: Post = JSON.parse(data);
            this.retrieveUsers(post.userId).then(data => {
                let user: User = JSON.parse(data);
                log(`Article: ${post.title} / Written by: ${user.name}`);
            }).catch(err => {
                console.error(err);
            });
        }).catch(err => {
            console.error(err);
        });
    }

    private retrieveArticles(): Promise<any>;
    private retrieveArticles(id: number): Promise<any>;
    private retrieveArticles(props?: any): Promise<any> {
        let restUrl = typeof props === "undefined" ? `${this.apiUrl}/posts` : `${this.apiUrl}/posts/${props}`;

        return new Promise((resolve, reject) => {
            request(restUrl, (error, response, body) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(body);
            });
        });
    }

    private retrieveUsers(): Promise<any>;
    private retrieveUsers(id: number): Promise<any>;
    private retrieveUsers(props?: any): Promise<any> {
        let restUrl = typeof props === "undefined" ? `${this.apiUrl}/users` : `${this.apiUrl}/users/${props}`;
        
        return new Promise((resolve, reject) => {
            request(restUrl, (error, response, body) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(body);
            });
        });
    }
}

const generator = new ArticleGenerator();
// generator.getAll();
// generator.getById(45);
generator.getByIdWithUserInfo(45);