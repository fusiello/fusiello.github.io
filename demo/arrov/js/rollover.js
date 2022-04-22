var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// Handles rollover images for NN3+ and IE4+
var loaded = new Array();

function F_loadRollover(image,imageName) {
	if (image && image.src &&
		(null == image.out || typeof(image.out) == typeof(void(0)))) {
		s = image.src;
		image.out = new Image();
		image.out.src = s;
		image.over = new Image();
		if (imageName.lastIndexOf('/') >= 0 || imageName.lastIndexOf('\\') >= 0) {
			s = imageName;
		} else {
			i = s.lastIndexOf('/');
			if (i<0) i = s.lastIndexOf('\\');
			if (i<0) { s = imageName; }
			else	 { s = s.substring(0,i+1) + imageName; }
		}
		image.over.src = s;
		loaded[image.name] = image;
	}
}
function F_roll(imageName,over) {
	if (document.images) {
	if (over) { imageObject = "over"; }
	else	  { imageObject = "out"; }
	image = loaded[imageName];
	if (image) {
		ref = eval("image."+imageObject);
		if (ref) image.src = eval("image."+imageObject+".src");
	}
	if (window.event)
		window.event.cancelBubble = true;
	}
}
 

}
/*
     FILE ARCHIVED ON 17:37:31 May 09, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:22:43 Sep 17, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.136
  RedisCDXSource: 1.779
  exclusion.robots: 0.148
  captures_list: 279.176
  LoadShardBlock: 259.29 (3)
  PetaboxLoader3.datanode: 244.111 (4)
  CDXLines.iter: 14.903 (3)
  load_resource: 753.305
  PetaboxLoader3.resolve: 556.143
  esindex: 0.011
*/