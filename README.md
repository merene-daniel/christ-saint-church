# ✝ Christ Saints' Church Website
### ክርስቶስ ቅዱሳን ቤተክርስቲያን

A full-featured church website built with **Next.js 14** (App Router) and **MongoDB**.  
All page content is in **Amharic**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/christ-saints-church

# OR MongoDB Atlas
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/christ-saints-church

NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Start MongoDB (local)
```bash
# macOS (Homebrew)
brew services start mongodb-community

# Ubuntu/Linux
sudo systemctl start mongod

# Windows
net start MongoDB
```

### 4. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📄 Pages

| Route | Amharic | Description |
|-------|---------|-------------|
| `/` | መነሻ | Home — Hero, service times, values, pastor spotlight |
| `/about` | ስለ እኛ | About — Mission, ministries, vision |
| `/pastor` | ፓስተር | Pastor Beza Merne bio + message |
| `/sermons` | ስብከቶች | Sermons list from MongoDB |
| `/events` | ዝግጅቶች | Upcoming events from MongoDB |
| `/contact` | አድራሻ | Contact form → saves to MongoDB |

---

## 🗄️ API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/contact` | Save contact message to MongoDB |
| `GET` | `/api/contact` | Get all contact messages |
| `GET` | `/api/sermons` | Get all sermons |
| `POST` | `/api/sermons` | Add a new sermon |
| `GET` | `/api/events` | Get upcoming events |
| `POST` | `/api/events` | Add a new event |

---

## 🗃️ MongoDB Collections

### `contactmessages`
```json
{
  "name": "ፍቅረ ወርቅ",
  "email": "user@example.com",
  "phone": "+251911...",
  "message": "ሰላም ቤተሰቦቼ...",
  "read": false,
  "createdAt": "2024-10-20T..."
}
```

### `sermons`
```json
{
  "titleAm": "ክርስቶስ ብቸኛ መንገድ ነው",
  "title": "Christ Is the Only Way",
  "preacher": "ፓስተር ቤዛ ሜርኔ",
  "date": "2024-10-20",
  "scripture": "ዮሐ 14:6",
  "descriptionAm": "...",
  "description": "...",
  "youtubeUrl": "https://youtube.com/..."
}
```

### `events`
```json
{
  "titleAm": "የጸሎት ምሽት",
  "title": "Prayer Night",
  "date": "2024-11-01",
  "time": "ምሽት 6:00",
  "location": "ዋናው አዳራሽ",
  "descriptionAm": "...",
  "category": "prayer"
}
```

---

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: MongoDB + Mongoose
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Playfair Display, Noto Serif Ethiopic, Cormorant Garamond

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Design

- **Aesthetic**: Luxury/refined — deep crimson, antique gold, and parchment cream
- **Typography**: Playfair Display (headings) + Noto Serif Ethiopic (Amharic body text)
- **Theme**: Dark hero sections with warm cream content areas
- **Animations**: Floating cross, gold glow pulse, scroll reveals

---

*Built for Christ Saints' Church — ፍቅር፣ ተስፋ፣ ሕይወት*
