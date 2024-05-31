body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

.container {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin-top: 40px;
    border: 2px solid #6ecf68; /* Light green border to match CI */
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

nav ul li {
    margin: 0 10px;
}

nav ul li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;
    background: linear-gradient(90deg, #a6ffcb 0%, #12d8fa 100%);
    color: white;
}

nav ul li a:hover,
nav ul li a.active {
    background-color: #6ecf68; /* Slightly darker green for hover/active */
    color: white;
}

.tab-content {
    display: none;
    animation: fadeIn 0.5s ease-in-out;
}

.tab-content.active {
    display: block;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.service {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
    transition: background-color 0.3s;
    border: 1px solid #6ecf68; /* Light green border for service items */
}

.service label {
    display: flex;
    align-items: center;
}

.service input {
    margin-right: 10px;
}

.service:hover {
    background-color: #e6ffe6; /* Light green background on hover */
}

.total {
    margin-top: 20px;
    font-weight: bold;
    font-size: 1.2em;
    color: #6ecf68; /* Light green color for total */
    text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
        align-items: center;
    }

    nav ul li {
        margin: 10px 0;
    }

    .service {
        padding: 15px;
    }
}

@media (max-width: 480px) {
    nav ul li a {
        padding: 8px 16px;
    }

    .service label {
        flex-direction: column;
        align-items: flex-start;
    }

    .total {
        font-size: 1em;
    }
}
