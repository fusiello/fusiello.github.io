 <?php                                                                       
    require_once("./bibtex2html.php");                                      
     echo '<pre>';
     echo extractBibEntry("./personal.bib", $_GET['key']);
     echo '</pre>'     ; 
 ?>