document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const scrollPosition = window.scrollY; // Get the vertical scroll position
    const maxScroll = 50; // Adjust this value based on how quickly it should fade and shrink
    
    // Initial header height (in px)
    const initialHeight = 120;

    // Calculate opacity for the background color (1 at the top, 0.3 at maxScroll)
    const opacity = Math.max(0.3, 1 - scrollPosition / maxScroll);
    
    // Calculate height for the header (initial height at the top, 50% of initial height at maxScroll)
    const height = Math.min(initialHeight, Math.max(initialHeight - (scrollPosition-maxScroll), 70)); // Shrinks to 50% of original height

    // Apply the calculated background opacity and height
    header.style.backgroundColor = `rgba(211, 211, 211, ${opacity})`; // Light gray background with fade
    header.style.height = `${height}px`; // Shrink vertically
    main.style.paddingTop = `${height}px`; // Shrink vertically
});