// Blog Data - All blog content in one place
const blogData = {
    'dfe': {
        category: 'Web Development',
        categoryUrl: 'http://127.0.0.1:8000/web-development',
        title: 'Dont Trust The FrontEnd DATA',
        description: 'During a recent pentest on an Ecommerce site using CMI, I found a critical flaw: the payment amount trusted frontend values without backend validation. The price was stored in a hidden input field, allowing an attacker to change a product from 350 MAD to 1 MAD before checkout.',
        image: 'http://127.0.0.1:8000/storage/1726671791939.jpg',
        imageAlt: 'Dont Trust The FrontEnd DATA',
        content: `<p>In my recent pentesting for a client, I discovered a critical vulnerability in their Ecommerce website, which uses CMI as the payment gateway. However, during the audit, I encountered a significant flaw trusting values sent directly from the frontend.</p><p>One of the core issues I found was that the system processes the payment amount based on the values received from the frontend, without validation or verification in the backend. The code looks something like this :</p><p>const credit = req.body.credit || 0;<br>paymentGateway.process(credit, payment);</p><p>In this setup, the product's price is being embedded in a hidden input field in the HTML: &lt;input name="credit" type="hidden" value="350" /&gt;</p><p>By using browser developer tools , an attacker could easily modify the hidden input value, reducing the price (for example, from 350 to 1) before submitting the payment request through the CMI gateway. This vulnerability allows anyone to manipulate payment values.</p><p>- Best Practices for Secure Payment Integration</p><p>1. Only pass non-sensitive data from the frontend: Instead of passing the payment amount or credit, the frontend should only pass the ID</p><p>2. Validate and calculate on the backend: The backend should use the ID to fetch the correct price from the database. Any discount or coupon code should also be validated on the backend.</p><p>3. Handle payments server-side: Once the backend confirms the correct amount, it should securely initiate the payment process with CMI, ensuring that the price sent to the gateway is accurate.<br>&nbsp;</p><div class="border-linear-3 rounded-4 p-lg-6 p-md-4 p-3 mt-6">
    <h4>Conclusion</h4>
    <p class="text-300 mt-4">Using CMI or any other payment gateway, it's crucial that sensitive data like payment amounts are not passed from the frontend to the backend without validation. Always calculate prices server-side, ensuring that any interaction with the gateway reflects accurate, validated amounts. This simple change can prevent devastating financial exploitation.</p>
</div>`,
        tags: [
            { name: 'Cybersecurity', url: 'http://127.0.0.1:8000/tag/cybersecurity' }
        ],
        readTime: '2 min read',
        date: 'Dec 03, 2025',
        author: 'Ilyas El kheir'
    },
    'massar': {
        category: 'Web Development',
        categoryUrl: 'http://127.0.0.1:8000/web-development',
        title: 'Caching Problem and Scalability ( Massar)',
        description: 'Massar crashes every exam season because its servers can\'t handle the predictable traffic spike. With no caching, load balancing, or scalable infrastructure, the system overloads. Cloud autoscaling and proper caching/CDN support would fix the issue.',
        image: 'http://127.0.0.1:8000/storage/logo-sgs.png',
        imageAlt: 'Caching Problem and Scalability ( Massar)',
        content: `<p>Massar or مسار ,it is a platform provided by the Ministry of Education in Morocco, struggles every year with overwhelming traffic when it publishes exam results for the 2nd baccalaureate and 1st baccalaureate regional exams. Thousands of students access the website simultaneously, leading to server crashes and service disruptions. The primary issue is that the website's infrastructure is not designed to handle such high traffic loads efficiently, causing a poor user experience.</p><p>The Massar platform typically handles routine administrative tasks but faces traffic spikes during exam result announcements. These spikes are predictable, occurring at specific times of the year when the Ministry of Education declares that results are available online. However, the platform's hosting infrastructure, likely using technologies like Windows Server, Microsoft ASP.NET, and IIS (Internet Information Services), has repeatedly proven incapable of managing this surge in traffic.</p><p>When students and parents flood the website to check results, the server's response time deteriorates, and in many cases, the site becomes inaccessible. This issue reflects inadequate traffic management strategies, caching inefficiencies, and a lack of proper scaling mechanisms.</p><p>- Core Issues Contributing to Performance Problems</p><p>1. Lack of Caching and Load Balancing:<br>- Caching is critical for serving static assets like images, stylesheets, and JavaScript files. Dynamic content, such as student results, could also be cached temporarily using techniques like edge caching to reduce the load on origin servers.<br>- Load balancing is essential to distribute incoming requests across multiple servers. Without this, a single server becomes a bottleneck during traffic spikes.</p><p>2. Scalability Challenges:<br>- The infrastructure seems to lack the ability to scale horizontally (adding more servers) or vertically (increasing server power) in response to sudden traffic surges. Cloud-based infrastructure such as AWS or Azure could provide autoscaling features that dynamically adjust server capacity during peak times.&nbsp;<br>…</p><div class="border-linear-3 rounded-4 p-lg-6 p-md-4 p-3 mt-6">
    <h4>Solutions for Improving Performance</h4>
    <p class="text-300 mt-4">1. Implement Effective Caching:
- Use caching layers to store frequently accessed data, such as exam results for specific students, for short periods.
- Employ edge caching through a CDN to store even dynamic content temporarily, reducing server load.

2. Utilize Autoscaling Cloud Infrastructure:
- Migrate to a cloud provider like AWS, Azure, or Google Cloud, where autoscaling mechanisms can add or remove server instances based on real-time traffic.
- Integrate load balancers to distribute incoming requests across multiple server instances during peak times.</p>
</div><p><br>&nbsp;</p>`,
        tags: [
            { name: 'caching', url: 'http://127.0.0.1:8000/tag/caching' },
            { name: 'scalability', url: 'http://127.0.0.1:8000/tag/scalability' }
        ],
        readTime: '2 min read',
        date: 'Dec 03, 2025',
        author: 'Ilyas El kheir'
    },
    'bigo': {
        category: 'Web Development',
        categoryUrl: 'http://127.0.0.1:8000/web-development',
        title: 'The Power of Efficient Search (Big O)',
        description: 'I recently revisited a private 2021 project where I built a Numberbook-style app using a massive dataset of 533M+ records from the Facebook breach. Searching through that much data was initially slow (O(N)), so I optimized it by sorting the dataset and implementing binary search, bringing the lookup time down to O(log N).',
        image: 'http://127.0.0.1:8000/storage/1727440396848.jpg',
        imageAlt: 'The Power of Efficient Search (Big O)',
        content: `<p>In 2021, I took on a private project for a small group of friends where I built a Numberbook-like app using data from the Facebook data breach. The dataset includes over 533 million rows of information like phone numbers, Facebook IDs, names, emails, and more — a massive amount of data to handle efficiently. Here's what I did to make the app fast and responsive:&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <p>🔹 <strong>The Scale of the Challenge</strong>: With 533 million records, searching through this data was initially slow. When you have this many rows in a CSV file, finding a specific record by phone number, name, or email without optimization would take way too long. In technical terms, the search follows a linear time complexity O(N) — meaning, if the record you need is at the end of the file, the system could potentially have to check each and every row. For a dataset this size, that's not sustainable.&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <p>🔹 Optimizing with Big O and Binary Search: To speed things up, I leveraged my knowledge of Big O Notation. Instead of searching through each record one by one, I sorted the data and applied a binary search algorithm, which significantly reduces the number of comparisons. This brings the complexity down to O(Log N). In real-world terms, instead of taking 533 million steps, the search might only take 29 steps to find the desired result. That's a huge leap in performance!&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <p>🔹 Could There Be a Better Solution? For most large datasets, using Big O principles and applying binary search is one of the most effective ways to optimize. There are some other strategies like indexing or using NoSQL databases like Elasticsearch or MongoDB that could scale better for real-time search in some use cases. However, since this project was built using a CSV file, the best solution remains optimizing through sorting and binary search.</p>
                                    <p>&nbsp;</p>`,
        tags: [
            { name: 'Pyhton', url: 'http://127.0.0.1:8000/tag/pyhton' },
            { name: 'Flask', url: 'http://127.0.0.1:8000/tag/flask' },
            { name: 'Big O', url: 'http://127.0.0.1:8000/tag/big-o' }
        ],
        readTime: '2 min read',
        date: 'Oct 22, 2025',
        author: 'Ilyas El kheir'
    }
};

