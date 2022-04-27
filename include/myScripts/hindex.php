
<?php  

function hindex()
{
	
    if (!function_exists('curl_init')) {
           require_once './include/myScripts/purl-master/src/Purl.php';
       }
	

	function filter_content($content, $url)
	{
		
		$output = preg_match_all('/<div class="gsc_rsb_s gsc_prf_pnl" id="gsc_rsb_cit" role="region" aria-labelledby="gsc_prf_t-cit">(.*)<\/div><div class="gsc_rsb_s gsc_prf_pnl" id="gsc_rsb_co" role="region" aria-labelledby="gsc_prf_t-ath">/is',$content,$matches);
		// if this has not worked try another variant:
		if(!isset($matches[1][0]))
		{
		$output = preg_match_all('/<div class="gsc_rsb_s gsc_prf_pnl" id="gsc_rsb_cit" role="region" aria-labelledby="gsc_prf_t-cit">(.*)<\/div><div class="gsc_lcl" role="main" id="gsc_prf_w">/is',$content,$matches);
		}

		$contentText = isset($matches[1][0])?$matches[1][0]:'e1';

		preg_match_all('/Citations<\/a><\/td><td class="gsc_rsb_std">(\d+)<\/td>/is',$contentText,$matches);
		$citations = isset($matches[1][0])?$matches[1][0]:'e2';

		preg_match_all('/h-index<\/a><\/td><td class="gsc_rsb_std">(\d+)<\/td>/is',$contentText,$matches);
		$hindex = isset($matches[1][0])?$matches[1][0]:'e3';

		preg_match_all('/<style>(.+)/is',$contentText,$matches);
		$contentText2 = isset($matches[1][0])?$matches[1][0]:'e4';
 
		$contentText2 = 'Citations according to <a href="'.$url.'">Google Scholar</a>: '
                                .$citations.' (h-index: '.$hindex.')';		
		return $contentText2; 
	}

	
	$curl = curl_init();
	$url = "https://scholar.google.com/citations?user=AsHOpeIAAAAJ&&hl=en";

	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 60);

	return filter_content( curl_exec($curl), $url );
	#print curl_exec($curl);
}


?>