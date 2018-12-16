/**
* EasyHTTP Library
*
* @version 2.0.0
* @author Aleksey Belchenkov
* @license MIT
 **/

class EasyHTTP {
    // Make an HTTP Get Request
    async get (url) {
      const res = await fetch(url);
      const resData = await res.json();
      return resData;
    }

    // Make an HTTP POST Request
    async post (url, data) {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const resData = await res.json();
            return resData;
    }

    // Make an HTTP PUT Request
    async put (url, data) {
            const res = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            return await res.json();
    }

    // Make an HTTP DELETE Request
    async delete (url) {
            const res = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return await ('Remove!!!');

    }
}