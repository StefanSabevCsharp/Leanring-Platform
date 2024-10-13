
export const calculateStarsToShow = (course) => {
    
    if (!course?.reviews || !Array.isArray(course.reviews) || course.reviews.length === 0) {
      return 0; 
    }
    const stars = course.reviews.reduce((acc, review) => {
      return acc + (review?.stars || 0);
    }, 0);
  
    const averageStars = stars / course.reviews.length;
  
    return averageStars > 4.5 ? 5 : Math.floor(averageStars);
  };
  