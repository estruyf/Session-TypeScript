/* ASYNC / AWAIT */

import * as request from "request";


async function printDelayed(ids: number[]) {
    for (const id of ids) {
        let user = await getUser(id);
        console.log(`User: ${JSON.parse(user).name}`);
    }
}

async function getUser(id: number): Promise<string> {
    const apiUrl: string = "https://jsonplaceholder.typicode.com";
    const restUrl = `${apiUrl}/users/${id}`;

    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            request(restUrl, (error, response, body) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(body);
            });
        }, 1000);
    });
}

printDelayed([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).then(() => {
    console.log();
    console.log("Printed every user!");
});