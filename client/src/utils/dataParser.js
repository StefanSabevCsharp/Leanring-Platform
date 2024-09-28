function dataParser(dateString) {
    const date = new Date(dateString);
    
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
  
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  export default dataParser;