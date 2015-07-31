
namapp.controller('mainCtrl', ["$scope", "$log", function ($scope, $log) {

    $('[data-toggle="tooltip"]').tooltip();

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
        bibtex: "http://vcg.seas.harvard.edu/publications/export/bibtex/83461",
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
      $scope.datasetTitle = "Dataset Request"
      $scope.contactTitle = "Let's Get In Touch!";
      $scope.contactDesc = "Questions? Comments?"

      $scope.license="By checking this box, you agree to the following license agreement: Access to, and use of, the images, and annotations in this dataset are for research and educational uses only. No commercial use, reproduction or distribution of the images, or any modifications thereof, is permitted. "


}]);
