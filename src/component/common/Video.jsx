import React from 'react'

const Video = ({src , className}) => {
  return (
    <video
    className={`${className} object-cover object-[center_20%]`}  // object-cover মানে video তার aspect ratio ঠিক রেখে পুরো box টা ক্রপ করে হলেও fill করবে (কোনো distortion বা ফাঁকা জায়গা থাকবে না)।
    src={src} 
    autoPlay // page load হওয়ার সাথে সাথে video নিজে থেকে play শুরু করবে
    loop // video শেষ হলে আবার প্রথম থেকে চলবে (background video-র জন্য দরকার হয় সাধারণত)
    muted // এটা ছাড়া বেশিরভাগ browser (Chrome/Safari) autoplay-ই block করে দেয়। Sound সহ autoplay ব্রাউজার allow করে না — এটা must যদি autoPlay ব্যবহার করতে চাও
    playsInline // mobile (বিশেষ করে iOS Safari)-এ video যাতে fullscreen-এ চলে না গিয়ে normal ভাবে div-এর ভেতরে play হয়
    ></video>
  )
}

export default Video

//object-top মানে crop করার সময় video-র উপরের অংশ visible রাখবে (নিচের দিক থেকে বেশি কাটবে) — এটাই তুমি চাইছো।

// Tailwind-এর object-position options (দরকার হলে):
// object-top — উপরের অংশ দেখাবে, নিচ থেকে বেশি crop হবে
// object-bottom — নিচের অংশ দেখাবে, উপর থেকে বেশি crop হবে
// object-center — default, মাঝখান থেকে crop
// object-[center_20%] — custom position (যদি exact percentage control লাগে)