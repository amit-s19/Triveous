# Triveous test api
### This repo contains the code for Trvieous test assignment covering a variety of apis. 
### The format of apis and how to query them is given below.

<br/>

__1. Add a tag__

_constraint: title must be unique_
<br/>_description : Adds a tag in the collection_   
_url : https://triveous-test-api.herokuapp.com/addTags_ 
<br/>_request format :_
```
{
    "title": "Search engine"
}
```
<br/>

__2. Add a bookmark__

_constraint: link must be unique_ <br/>
_description : Adds a bookmark in the collection_   
_url : https://triveous-test-api.herokuapp.com/addBookmark_ <br/>
_request format :_
```
{
    "link": "https://www.youtube.com",
    "title": "Youtube",
    "publisher": "self"
}
```
<br/>

__3. Add tag to bookmark__

_constraint: tag must exist in the tags collection, bookmark must exist in the bookmarks collection_ <br/>
_description : Adds a tag to a bookmark in the collection_   
_url : https://triveous-test-api.herokuapp.com/addTagToBookmark_ <br/>
_request format :_
```
{
    "tag": "games",
    "bookmark": "www.google.com"
}
```
<br/>

__4. Get tags__

_constraint: Tags must exist in the database_ <br/>
_description : Displays all the tags in the database_   
_url : https://triveous-test-api.herokuapp.com/getTags_ 
    
<br/>

__5. Get bookmarks__

_constraint: Bookmarks must exist in the database_ <br/>
_description : Displays all the bookmarks in the database_   
_url : https://triveous-test-api.herokuapp.com/getBookmarks_ 
    
<br/>

__6. Remove a tag__

_constraint: tag must exist in the database_ <br/>
_description : Removes a tag from the database_   
_url : https://triveous-test-api.herokuapp.com/removeTags_ <br/>
_request format :_
```
{
    "title":"email service"
}
```
<br/>

__7. Remove a bookmark__

_constraint: bookmark must exist in the database_ <br/>
_description : Removes a bookmark from the database_   
_url : https://triveous-test-api.herokuapp.com/removeBookmark_ <br/>
_request format :_
```
{
    "link":"https://www.gmail.com"
}
```
<br/>

__8. Remove a tag from a bookmark__

_constraint: tag must exist in database, bookmark must exist in db and tag must be attached to the bookmark_ <br/>
_description : Removes a tag from the specified bookmark_   
_url : https://triveous-test-api.herokuapp.com/removeTagFromBookmark_ <br/>
_request format :_
```
{
    "tag": "games",
    "bookmark": "www.google.com"
}
```
<br/>