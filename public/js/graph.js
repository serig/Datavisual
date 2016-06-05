queue()
		    .defer(d3.json, "/HitperDay/hit")
		    .await(makeGraphs);

      function makeGraphs(error, data) {
		
		var dataset = data;
		var parseDate = d3.time.format("%m/%d/%Y").parse;

		data.forEach(function(d){ 
              d.date = parseDate(d.date);
              d.total = d.hhtp_404 + d.http_200 + d.http_302;
              d.Year=d.date.getFullYear();

		});

		var ndx = crossfilter(data);

		var dateDim = ndx.dimension(function(d){ return d.date; });
		var hits = dateDim.group().reduceSum(function(d){ return d.total; });

		var minDate = dateDim.bottom(1)[0].date;
		var maxDate = dateDim.top(1)[0].date;
  
        var status_200=dateDim.group().reduceSum(function(d) {return d.http_200;});
		var status_302=dateDim.group().reduceSum(function(d) {return d.http_302;});
		var status_404=dateDim.group().reduceSum(function(d) {return d.http_404;});

        var hitslineChart = dc.lineChart("#chart-line-hitsperday");
          hitslineChart
               .width(500).height(200)
			   .dimension(dateDim)
			   .group(status_200,"200")
			   .stack(status_302,"302")
			   .stack(status_404,"404")   
			   .renderArea(true)
			   .x(d3.time.scale().domain([minDate,maxDate]))
			   .brushOn(false)
			   .legend(dc.legend().x(50).y(10).itemHeight(13).gap(5))
			   .yAxisLabel("Hits per day");

        
        var yearRingChart = dc.pieChart("#chart-ring-year");
        var yearDim  = ndx.dimension(function(d) {return +d.Year;});
        var year_total = yearDim.group().reduceSum(function(d){return d.http_200 + d.http_302;});
        
        yearRingChart
            .width(200).height(200)
            .dimension(yearDim)
            .group(year_total)
            .innerRadius(30);

        dc.renderAll();
   }