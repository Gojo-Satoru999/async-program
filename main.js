function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await delay(1000);
        console.log(value);
    }
}

// Example usage:
iterateWithAsyncAwait([1, 2, 3, 4, 5]);

async function fetchData() {
    // Simulating an API call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Fetched data');
            } else {
                reject(new Error('Failed to fetch data'));
            }
        }, 1000);
    });
}

async function awaitCall() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Example usage:
awaitCall();

async function fetchFromUrl(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch from ${url}`);
    }
    return response.json();
}

async function parallelCalls(urls) {
    try {
        const responses = await Promise.all(urls.map(url => fetchFromUrl(url)));
        console.log('Responses:', responses);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Example usage:
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

parallelCalls(urls);

