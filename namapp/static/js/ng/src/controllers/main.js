
namapp.controller('mainCtrl', ["$scope", "$log", "$timeout", "$http", function ($scope, $log, $timeout, $http) {


  	$scope.title 		= " MASSVIS Dataset"
  	$scope.subtitle		= "Massachusetts (Massive) Visualization Dataset"

  	$scope.projectTitle = "Massachusetts (Massive) Visualization Dataset"
  	$scope.projectDesc = 'Understanding the cognitive and perceptual processing of a visualization is \
    essential for effective data presentation as well as communication to the viewer. To gain deeper \
    insight into what elements of a visualization affect its memorability, recognition, recall, and \
    comprehension, we constructed the MASSVIS Database.  This database, one of the largest to date of \
    real-world visualizations, was constructed by scraping multiple online sources of visualizations from \
    various publication venues including government reports, infographic blogs, news media websites, and \
    scientific journals. The diversity and distribution of these visualizations represent a broad set of \
    data visualizations "in the wild".  In addition to gaining insight into the visual encoding techniques\
     and designs utilized by the different publication venues, this database also serves as a resource for\
      cognitive and perceptual experiments.';
    $scope.projectSubDesc = "The database consists of over 5,693 static visualizations of which 2,070 are “single” with visualization type information, and additionally 410 of these visualizations have extensive annotations, memorability scores, eye-movements, and labels."

    $scope.acknowledgement = "This work has been supported in part by the National Science Foundation (NSF) under grant 1016862, Google, and Xerox awards to Aude Oliva. This work has also been made possible through support from the Department of Defense through the National Defense Science & Engineering Graduate Fellowship (NDSEG) Program, the NSF Graduate Research Fellowship Program, the Natural Sciences and Engineering Research Council of Canada Postgraduate Doctoral Scholarship (NSERC PGS-D), and the Kwanjeong Educational Foundation."
  	$scope.papers = [
      {
        title: "Beyond Memorability: Visualization Recognition and Recall",
        authors: "Borkin, M.,  Bylinskii, Z., Kim, N.W., Bainbridge C.M., Yeh, C.S., Borkin, D., Pfister, H., & Oliva, A.",
        source: "IEEE Transactions on Visualization and Computer Graphics (Proceedings of InfoVis 2015) - Conditionally Accepted"
      },
      {
        title: "A Crowdsourced Alternative to Eye-tracking for Visualization Understanding",
        link: "http://namwkim.org/files/CHI2015-WIP-Bubble.pdf",
        slides:"http://namwkim.org/files/CHI2015-WIP-Bubble-Poster.pdf",
        bibtex: "http://vcg.seas.harvard.edu/publications/export/bibtex/371751",
        authors: "Kim, N.W., Bylinskii, Z., Borkin, M., Oliva, A., Gajos, K.Z., & Pfister, H.",
        site: "https://study.namwkim.org/bubble/admin",
        source: "Proceedings of the ACM Conference Extended Abstracts on Human Factors in Computing Systems (CHI EA '15)"
      },
      {
        title: "What Makes a Visualization Memorable?",
        link: "http://vcg.seas.harvard.edu/files/pfister/files/infovis_borkin-128-camera_ready_0.pdf",
        supplement: "http://vcg.seas.harvard.edu/files/pfister/files/supplemental-infovis128.pdf",
        video: "http://vcg.seas.harvard.edu/files/pfister/files/experiment-screengrab.mp4",
        slides:"http://vcg.seas.harvard.edu/files/pfister/files/infovis2013_borkin-vizmem.pdf",
        bibtex: "http://vcg.seas.harvard.edu/publications/export/bibtex/83476",
        authors: "Borkin, M., Vo, A., Bylinskii, Z., Isola, P., Sunkavalli, S., Oliva, A., & Pfister, H.",
        source: "IEEE Transactions on Visualization and Computer Graphics (Proceedings of InfoVis 2013)"
      }
      ]
  	$scope.members = [
      {
      	name: "Michelle A. Borkin",
      	url: "http://people.seas.harvard.edu/~borkin/",
      	photo: "michelle.jpg",
      	affiliation: "Assistant Professor, Northeastern CCIS"
      },
      {
      	name: "Zoya Bylinskii",
      	url: "http://web.mit.edu/zoya/www/",
      	photo: "zoya.jpg",
      	affiliation: "PhD Candidate, MIT EECS"
      },
      {
        name: "Krzysztof Z. Gajos",
        url: "http://www.eecs.harvard.edu/~kgajos/",
        photo: "gajos.jpg",
        affiliation: "Assosiate Professor, Harvard SEAS"
      },
      {
        name: "Nam Wook Kim",
        url: "http://namwkim.org",
        photo: "nam.png",
        affiliation: "PhD Student, Harvard SEAS"
      },
      {
        name: "Aude Oliva",
        url: "http://cvcl.mit.edu/audeoliva.html",
        photo: "aude.jpg",
        affiliation: "Principal Research Scientist, MIT CSAIL"
      },
      {
        name: "Hanspeter Pfister",
        url: "http://vcg.seas.harvard.edu/people/hanspeter-pfister",
        photo: "hp.jpg",
        affiliation: "Professor, Harvard SEAS"
      }

      ];
      $scope.datasetTitle = "Dataset Download"
      $scope.contactTitle = "Let's Get In Touch!";
      $scope.contactDesc = "Questions? Comments?"

      $scope.license="By checking this box, you agree to the following license agreement: Access to, and use of, the images, and annotations in this dataset are for research and educational uses only. No commercial use, reproduction or distribution of the images, or any modifications thereof, is permitted. "

      $scope.eyeTitle = "Eye-movement Data";
      $scope.eyeDesc = "We have eye-movement data for a total of 393 visualizations and 33 viewers, with an average of 16 viewers per visualization. Each viewer looked at each visualization for 10 seconds, generating an average of 37 fixation points. This is a total of about 600 fixation points per visualization across all viewers. We store the (x,y) location of each fixation on a visualization, the time-point when the fixation occurred during the viewing period, and the duration (in ms) of each fixation. We provide tools for visualizing the fixation sequences, fixation durations, and fixation heatmaps on top of visualizations."


      $scope.datasets = [
        {
          name: "all5k",
          desc: "all5k contains 5,693 single- and multi-panel visualizations scraped from the web from seven different online sources making up a total of four different source categories (government and world organizations, news media, infographics, and scientific publications). We provide (1) the original visualizations, (2) original URLs, (3) source and (4) category labels, as well as (5) whether each visualization is single or multi-panel. This data is described in “What makes a visualization memorable?” (InfoVis 2013).",
          bibtex: "http://vcg.seas.harvard.edu/publications/export/bibtex/83476"
        },
        {
          name: "single2k",
          desc: "single2k contains a subset of the visualizations in all5k, limited to only single-panel, stand-alone visualizations (a total of 2,070 visualizations). We provide (1) the original visualizations, (2) original URLs, (3) source and (4) category labels, (5) visualization type, and (6) a label indicating the presence/absence of pictorial element(s). The taxonomy used to classify the visualization type is described in “What makes a visualization memorable?” (InfoVis 2013).",
          bibtex: "http://vcg.seas.harvard.edu/publications/export/bibtex/83476"
        },
        {
          name: "targets410",
          desc: "targets410 includes the 410 target visualizations used in the Amazon Mechanical Turk (AMT) experiments presented in “What makes a visualization memorable?” (InfoVis 2013). These are a subset of the single2k single-panel visualizations, that have also been annotated with 6 attributes (data-ink ratio, number of distinct colors, black&white, visual density, human-recognizable object, human depiction). Thus, we provide (1) the original visualizations, (2) original URLs, (3) source and (4) category labels, (5) visualization type, and (6-12) the attributes described above, as well as the memorability scores gathered from the AMT experiments: (13) hit rate (HR) and (14) false-alarm rate (FAR) for each visualization.",
          bibtex: "http://vcg.seas.harvard.edu/publications/export/bibtex/83476"
        },
        {
          name: "targets393",
          desc: "targets393 includes the393 visualizations that were used for the eye tracking experiments and analyses described in “Beyond memorability: visualization recognition and recall” (InfoVis 2015). We removed visualizations from targets410 that contained skewed aspect ratios for eye tracking. We include all (1)-(14) elements from targets410, as well as: (15) a transcribed title for each visualization, (16) title location, (17) memorability (HR) scores from the in-lab prolonged-exposure experiment, (18) whether the visualization contains data redundancy, (19) whether the visualization contains message redundancy, (20) eye movements from 33 participants (average of 16.7 viewers per visualization), (21) free-form descriptions generated from memory by 33 participants (average of 6.2 descriptions per visualization).",
          bibtex: ""
        }
      ];
      $scope.password = "";
      $scope.dataLinks=[];
      function validateEmail(email) {
          var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
          return re.test(email);
      }
      $scope.request = function () {
        if ($("#licensechk").prop('checked')==false){
          $("#license-alert").show();
          $timeout(function(){
            $("#license-alert").hide(400);
          },2000)
          return;         
        }

        // validate form data
        var name      = $("#name").val();
        var email     = $("#email").val();
        var inst      = $("#inst").val();
        var instAddr  = $("#inst_addr").val();
        var ivgrName  = $("#ivgr_name").val();
        var ivgrEmail = $("#ivgr_email").val();
        var othrEmail = $("#othr_email").val();
        var rqstResn  = $("#rqst_resn").val();
        $log.log(name + "," + email + "," +inst+ "," + instAddr+ "," + ivgrName + "," +ivgrEmail + "," +othrEmail+ "," + rqstResn );
        if (name=="" || email=="" || !validateEmail(email)){
          $log.log("not enough information")
          $("#request-alert").show();
          $timeout(function(){
            $("#request-alert").hide(400);
          },2000)
          return;
        }
        // request data
        var requested = [];
        $scope.datasets.forEach(function(d){
          if ($("#"+d.name).prop('checked'))
            requested.push(d.name);
          $log.log(d.name + ", " + $("#"+d.name).prop('checked'));
        })
        if (requested.length==0) {          
          $("#data-alert").show();
          $timeout(function(){
            $("#data-alert").hide(400);
          },2000)
          return;
        } 

        var request = {
          name  : name,
          email : email,
          inst  : inst,
          inst_addr   : instAddr,
          ivgr_name   : ivgrName,
          ivgr_email  : ivgrEmail,
          othr_email  : othrEmail,
          rqst_resn   : rqstResn,
          requested   : requested
        }


        $http.post("index.fcgi/datarequest", request)
        .success(function(result){
          
          if (result){
            $("#accesspw").html(result.password);
            $("#myModal").modal();

            $timeout(function(){
              
              $scope.password  = result.password;
              $log.log("PASSWORD:" + $scope.password)
              dataLinks = []
              requested.forEach(function(f){
                dataLinks.push({link: (f+".zip"), pw: $scope.password});
              })
              $log.log(dataLinks);
              $scope.dataLinks = dataLinks;
            })
          }else{
            $("#request-error").show();
            $timeout(function(){
              $("#request-error").hide(400);
            },2000)
          }
        })
        .error(function () {
          $("#request-error").show();
          $timeout(function(){
            $("#request-error").hide(400);
          },2000)

        })
      }
}]);
