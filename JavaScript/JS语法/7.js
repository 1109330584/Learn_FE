// 去除空白符
let str = "       name        ";
    str = str.replace(/\s/g,"");
    console.log(str);

// 去除开头、结尾的空白符
 let tar = "     na  me        ";
    tar = tar.replace(/^\s*|\s*$/g,"");
    console.log(tar);
