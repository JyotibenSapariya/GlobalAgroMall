document.write('&nbsp');
var pendingHide = null;var tooltip = null;var chartId = null;function hideTooltip() {		if (tooltip) pendingHide = setTimeout("tooltip.style.display = 'none';", 200);	}	function showTooltip (e, label) {		if (pendingHide) {			clearTimeout(pendingHide);			pendingHide = null;		}		e = e || window.event;		var tooltipText;		if (!tooltip) {			tooltip = document.createElement('div');			tooltip.style.position = 'absolute';			tooltip.id = 'tooltip';			tooltipText = document.createElement('div');			tooltipText.className = 'tooltip';			tooltip.appendChild(tooltipText);			document.body.appendChild(tooltip);		} else {			tooltipText = tooltip.firstChild;		}		tooltipText.innerHTML = label;		var left = e.pageX || (e.clientX +			(document.documentElement.scrollLeft || document.body.scrollLeft));		var top = e.pageY || (e.clientY +			  (document.documentElement.scrollTop || document.body.scrollTop));		tooltip.style.display = '';		tooltip.style.top = (top+5)+'px';		tooltip.style.left = (left+20)+'px';	}document.write(' <table cellpadding=0 cellspacing=0 border =\'0\' class="marketview_quoteboard" id="bcSnapshotQuoteboard">\n<tr><td colspan="4" class ="marketview_date">As of 1/11/16/ 3:46 AM</td></tr><tr><td colspan ="4" class="marketview_topheader">Electronic Trade</td></tr><tr></tr><tr><td colspan=\'4\' class="marketview_title"><a href="/markets/futures/?&page=quote&sym=GC">Gold</td></tr><tr class=marketview_TRe id=\'sync-target-GC-1\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Jan-2016 (GCF16)</b><br /><br /><b>Open:</b> 1105.7<br /><b>High:</b> 1107.9<br /><b>Low:</b> 1104.0<br /><b>Last:</b> 1104.0<br /><b>Chg:</b> +6.2<br /><b>%Chg:</b> +0.56%\')" onmouseout="hideTooltip();">Jan-2016</span></td>\n<td class="marketview_quote sync-last">1104.0</td><td class="marketview_changeUp sync-change" >+6.2</td>\n</tr>\n<tr class=marketview_TRo id=\'sync-target-GC-2\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Feb-2016 (GCG16)</b><br /><br /><b>Open:</b> 1103.6<br /><b>High:</b> 1108.3<br /><b>Low:</b> 1099.8<br /><b>Last:</b> 1100.2<br /><b>Chg:</b> +2.3<br /><b>%Chg:</b> +0.21%\')" onmouseout="hideTooltip();">Feb-2016</span></td>\n<td class="marketview_quote sync-last">1100.2</td><td class="marketview_changeUp sync-change" >+2.3</td>\n</tr>\n<tr class=marketview_TRe id=\'sync-target-GC-3\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Mar-2016 (GCH16)</b><br /><br /><b>Open:</b> 1106.0<br /><b>High:</b> 1107.3<br /><b>Low:</b> 1100.5<br /><b>Last:</b> 1100.5<br /><b>Chg:</b> +2.4<br /><b>%Chg:</b> +0.22%\')" onmouseout="hideTooltip();">Mar-2016</span></td>\n<td class="marketview_quote sync-last">1100.5</td><td class="marketview_changeUp sync-change" >+2.4</td>\n</tr>\n<tr></tr><tr><td colspan=\'4\' class="marketview_title"><a href="/markets/futures/?&page=quote&sym=SI">Silver</td></tr><tr class=marketview_TRe id=\'sync-target-SI-1\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Jan-2016 (SIF16)</b><br /><br /><b>Open:</b> 13.950<br /><b>High:</b> 13.950<br /><b>Low:</b> 13.950<br /><b>Last:</b> 13.950<br /><b>Chg:</b> +0.042<br /><b>%Chg:</b> +0.30%\')" onmouseout="hideTooltip();">Jan-2016</span></td>\n<td class="marketview_quote sync-last">13.950</td><td class="marketview_changeUp sync-change" >+0.042</td>\n</tr>\n<tr class=marketview_TRo id=\'sync-target-SI-2\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Feb-2016 (SIG16)</b><br /><br /><b>Open:</b> 13.965<br /><b>High:</b> 14.045<br /><b>Low:</b> 13.930<br /><b>Last:</b> 13.975<br /><b>Chg:</b> +0.067<br /><b>%Chg:</b> +0.48%\')" onmouseout="hideTooltip();">Feb-2016</span></td>\n<td class="marketview_quote sync-last">13.975</td><td class="marketview_changeUp sync-change" >+0.067</td>\n</tr>\n<tr class=marketview_TRe id=\'sync-target-SI-3\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Mar-2016 (SIH16)</b><br /><br /><b>Open:</b> 13.965<br /><b>High:</b> 14.075<br /><b>Low:</b> 13.930<br /><b>Last:</b> 13.975<br /><b>Chg:</b> +0.057<br /><b>%Chg:</b> +0.41%\')" onmouseout="hideTooltip();">Mar-2016</span></td>\n<td class="marketview_quote sync-last">13.975</td><td class="marketview_changeUp sync-change" >+0.057</td>\n</tr>\n</table>');
