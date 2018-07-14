const createCommentPermlink = (parentAuthor, parentPermlink)=> {
   let permlink;
   const timeStr = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '');

   if(parentPermlink) {
      const newParentPermlink = parentPermlink.replace(/(-\d{8}t\d{9}z)/g, '');
      permlink = `re-${parentAuthor}-${newParentPermlink}-${timeStr}`;
   } else {
      permlink = `re-${parentAuthor}-${timeStr}`;
   }
  
   if (permlink.length > 255) {
     permlink = permlink.substring(permlink.length - 255, permlink.length);
   }

   return permlink.toLowerCase().replace(/[^a-z0-9-]+/g, '');
}

module.exports = {
   createCommentPermlink
}