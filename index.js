```html
<!DOCTYPE html>
<html>
<head>
    <title>Student Registration Form</title>

    <style>
        body {
            font-family: Arial;
            background-color: lightblue;
        }

        .container {
            width: 350px;
            margin: 40px auto;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
        }

        h2 {
            text-align: center;
            color: blue;
        }

        input, select {
            width: 100%;
            padding: 8px;
            margin: 8px 0;
            box-sizing: border-box;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: blue;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>

<body>

<div class="container">
    <h2>Student Registration</h2>

    <form id="studentForm">
        <label>Student Name:</label>
        <input type="text" id="name" required>

        <label>USN:</label>
        <input type="text" id="usn" required>

        <label>Email:</label>
        <input type="email" id="email" required>

        <label>Phone:</label>
        <input type="tel" id="phone"
               pattern="[0-9]{10}" required>

        <label>Branch:</label>
        <select id="branch" required>
            <option value="">Select Branch</option>
            <option>Computer Science</option>
            <option>Information Science</option>
            <option>Electronics</option>
            <option>Mechanical</option>
        </select>

        <label>Semester:</label>
        <select id="semester" required>
            <option value="">Select Semester</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
        </select>

        <br><br>
        <button type="submit">Register</button>
    </form>
</div>

<script>
    document.getElementById("studentForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Student Registration Successful!");

        document.getElementById("studentForm").reset();
    });
</script>

</body>
</html>
```