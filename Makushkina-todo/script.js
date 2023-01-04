let wrap = document.createElement("wrap");
wrap.className = "wrap";
document.body.append(wrap);

let mainlist = document.createElement("mainlist");
mainlist.className = "wrap-mainlist";
wrap.append(mainlist);

let title = document.createElement("title");
title.className = "wrap-mainlist__title";
title.innerText = "My first to do list!";
mainlist.append(title);

let upperarea = document.createElement("upperarea");
upperarea.className = "wrap-mainlist-upperarea";
mainlist.append(upperarea);

let downarea = document.createElement("downarea");
downarea.className = "wrap-mainlist-downarea";
mainlist.append(downarea);

let addedTask = document.createElement("addedTask");
addedTask.className = "wrap-mainlist-downarea-addedTask";
downarea.append(addedTask);

let deleteAllButton = document.createElement("deleteAllButton");
deleteAllButton.className = "wrap-mainlist-upperarea__deleteAllButton";
deleteAllButton.innerText = "Delete All";
upperarea.append(deleteAllButton);

let input = document.createElement("input");
input.className = "wrap-mainlist-upperarea__input";
input.innerHTML = "Enter your to do here!";
upperarea.append(input);

let addButton = document.createElement("addButton");
addButton.className = "wrap-mainlist-upperarea__addButton";
addButton.innerHTML = "Add";
upperarea.append(addButton);
