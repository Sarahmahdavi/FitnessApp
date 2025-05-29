<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Authentication Oasis</title>
  <style>
    body {
      font-family: sans-serif;
      background-color: #f9fafb;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    .auth-layout {
      background-color: white;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      width: 100%;
    }
    .auth-layout h1 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #1d4ed8;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.375rem;
    }
    .submit-btn {
      width: 100%;
      padding: 0.75rem;
      background-color: #1d4ed8;
      color: white;
      border: none;
      border-radius: 0.375rem;
      font-size: 1rem;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div class="auth-layout">
    <h1>Authentication Oasis</h1>
    <form id="register-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit" class="submit-btn">Register</button>
    </form>
  </div>

  <script>
    document.getElementById('register-form').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      // Simular envio
      alert(`Registered:\nName: ${name}\nEmail: ${email}`);
    });
  </script>

</body>
</html>
