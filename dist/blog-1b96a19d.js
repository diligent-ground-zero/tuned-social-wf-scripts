const a=()=>{$(".category_button").each(function(){var t=$(this).attr("category"),r=$(this).attr("href");if(r){var e=r+t;$(this).attr("href",e)}else $(this).attr("href",t)})};export{a as initBlog};
