# Comments App

A React-based comments application that allows users to add, like, and delete comments with a clean and interactive user interface.

## Live Demo

🌐 [View Live Demo](https://srinivas9618.github.io/Comments-App/)

## Features

- ✏️ **Add Comments** - Users can enter their name and comment text to add new comments
- 👍 **Like Comments** - Toggle like/unlike functionality for each comment
- 🗑️ **Delete Comments** - Remove comments from the list
- ⏰ **Time Distance** - Displays how long ago each comment was posted
- 🎨 **Color-coded Avatars** - Random background colors for user avatar initials
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ✅ **Form Validation** - Prevents empty comments from being posted

## Tech Stack

- **React** - UI library (Class Components)
- **CSS3** - Styling
- **UUID** - Unique ID generation for comments
- **date-fns** - Time formatting and distance calculation

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/srinivas9618/Comments-App.git
   cd Feedback-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## Usage

1. **Add a Comment**
   - Enter your name in the "Your Name" field
   - Type your comment in the "Your Comment" field
   - Click the "Add Comment" button
   - Your comment will appear in the comments list

2. **Like a Comment**
   - Click the like button (👍) on any comment
   - The button will highlight when liked
   - Click again to unlike

3. **Delete a Comment**
   - Click the delete button (🗑️) on any comment
   - The comment will be removed immediately

## Component Details

### CommentsApp
- **State Management**: Manages form inputs and comments list
- **Functions**:
  - `onChangeNameInput()` - Updates name input state
  - `onChangeCommentInput()` - Updates comment input state
  - `addComment()` - Creates new comment with validation
  - `toggleCommentLike()` - Toggles like status
  - `deleteComment()` - Removes comment from list

### CommentItem
- **Props**: Receives comment data and action handlers
- **Features**:
  - Displays user avatar with initial and background color
  - Shows comment text and time elapsed
  - Provides like and delete buttons
  - Responsive layout


## Future Enhancements

- 📝 Edit existing comments
- 🔍 Search/filter comments
- 💾 Local storage persistence
- 🌙 Dark mode support
- 👤 User profiles
- 📊 Comment sorting options
- ⭐ Rating system

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

**Srinivas** - [GitHub Profile](https://github.com/srinivas9618)

---
