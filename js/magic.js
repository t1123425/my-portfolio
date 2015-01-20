$(function() {
var skill = $(".skill");
var skill_list = skill.find('ul li');

skill_list.hover(function () {
  $(this).toggleClass('magictime puffIn');
});


});