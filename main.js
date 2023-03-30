var images = ["IMG_3647.jpg","IMG_4205.jpg","IMG_7992.jpg","Saanvi.JPG"];
var names = ["Chaitali Doshi(Mother)","Dhimant Doshi(Father)","Viana Doshi(Myself)","Saanvi Shah(Cousin Sister)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    var updatedImage = images[i];
 
    var updatedName = names [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}