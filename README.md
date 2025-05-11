# BubblyJS

**BubblyJS** is a lightweight, toast-style notification system written in pure JavaScript (Vanilla JS).  
It requires **no dependencies** and is easy to drop into any project for clean and customizable UI alerts.

---

## ✨ Features

- 🔔 Minimalist notifications with smooth animations
- 🎨 Custom types: `info`, `error`, `success`, etc.
- 🕒 Auto-dismiss after a delay or manual close
- 📍 Positioning: `top-left`, `top-right`, `bottom-left`, `bottom-right`, etc.
- 🧩 Lightweight & framework-free

---

## 🚀 Usage

### Include

```html
<link rel="stylesheet" href="bubbly.css">
<script src="bubbly.js"></script>
```

### Example

```js
Bubbly('Hello, world!');

Bubbly('Something went wrong', {
  type: 'error',
  position: 'top-right',
  close: true,
  timeleft: 0
});
```

---

## 🔧 Options

| Option     | Type      | Default        | Description                                 |
|------------|-----------|----------------|---------------------------------------------|
| `type`     | string    | `'info'`       | Notification type (e.g. `info`, `error`)    |
| `position` | string    | `'left-bottom'`| Placement on screen                         |
| `timeleft` | number    | `3000`         | Milliseconds before auto-hide (0 = sticky)  |
| `close`    | boolean   | `false`        | Show a manual close button                  |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
© 2025 kurakage.
