window.firstload = true; 

function generateSentence(){
$agencies=["Access Board", "Administration for Native Americans", "Administration on Aging", "Administration on Developmental Disabilities", "Administrative Committee of the Federal Register", "Administrative Conference of the United States", "Administrative Office of the U.S. Courts", "Advisory Council on Historic Preservation", "African Development Foundation", "Agency for Healthcare Research and Quality", "Agency for International Development", "Agency for Toxic Substances and Disease Registry", "Agricultural Marketing Service", "Agricultural Research Service", "Agriculture Department", "Air and Radiation Hotline", "U.S. Air Force", "Alcohol and Tobacco Tax and Trade Bureau", "Alcohol, Tobacco, Firearms, and Explosives Bureau", "American Battle Monuments Commission", "AmeriCorps Recruiting", "AMTRAK Corporation", "Animal and Plant Health Inspection Service", "Appalachian Regional Commission", "Architect of the Capitol", "National Archives and Records Administration", "Arctic Research Commission", "Arms Control and International Security", "U.S. Army", "Army Corps of Engineers", "Arthritis and Musculoskeletal Interagency Coordinating Committee", "Atlantic Fleet Forces Command", "Bonneville Power Administration", "U.S. Botanic Garden", "Broadcasting Board of Governors", "Bureau of Alcohol and Tobacco Tax and Trade", "Bureau of Alcohol, Tobacco, Firearms, and Explosives", "Bureau of Citizenship and Immigration Services", "Bureau of Economic Analysis", "Bureau of Indian Affairs", "Bureau of Industry and Security", "Bureau of International Labor Affairs", "Bureau of Justice Statistics", "Bureau of Labor Statistics", "Bureau of Land Management", "Bureau of Prisons", "Bureau of Reclamation", "Bureau of the Census", "Bureau of the Engraving and Printing", "Bureau of the Public Debt", "Bureau of Transportation Statistics", "Capitol Visitor Center", "Census Bureau", "Center for Food Safety and Applied Nutrition", "Centers for Disease Control and Prevention", "Centers for Medicare & Medicaid Services", "Central Intelligence Agency", "Chemical Safety and Hazard Investigation Board", "Citizens' Stamp Advisory Committee", "Citizenship and Immigration Services", "Office of Civilian Radioactive Waste Management", "Coast Guard", "Commerce Department", "Commission on Civil Rights", "Commission on Fine Arts", "Commission on International Religious Freedom", "Commission on Security and Cooperation in Europe", "Committee for Purchase from People Who Are Blind or Severely Disabled", "Committee for the Implementation of Textile Agreements", "Committee on Foreign Investment in the United States", "Community Oriented Policing Services", "Community Planning and Development", "Congressional Budget Office", "Congressional Research Service", "Consumer Financial Protection Bureau", "Consumer Product Safety Commission", "Coordinating Council on Juvenile Justice and Delinquency Prevention", "Corporation for National and Community Service", "Army Corps of Engineers", "Council of Economic Advisers", "Council on Environmental Quality", "Court of Appeals for the Armed Forces", "Court of Appeals for the Federal Circuit", "Court of Appeals for Veterans Claims", "Court of Federal Claims", "Court of International Trade", "Defense Acquisition University", "Defense Advanced Research Projects Agency", "Defense Commissary Agency", "Defense Contract Audit Agency", "Defense Contract Management Agency", "Defense Finance and Accounting Services", "Defense Information Systems Agency", "Defense Intelligence Agency", "Defense Legal Services Agency", "Defense Logistics Agency", "Defense Nuclear Facilities Safety Board", "Defense Security Cooperation Agency", "Defense Security Service", "Defense Technical Information Center", "Defense Threat Reduction Agency", "Delaware River Basin Commission", "Denali Commission", "Department of Agriculture", "Department of Commerce", "Department of Defense", "Department of Defense Inspector General", "Department of Education", "Department of Energy", "Department of Health and Human Services", "Department of Homeland Security", "Department of Housing and Urban Development", "Department of Justice", "Department of Labor", "Department of State", "Department of the Interior", "Department of the Treasury", "Department of Transportation", "Department of Veterans Affairs", "Office of the Director of National Intelligence", "Domestic Policy Council", "Drug Enforcement Administration", "Economic Adjustment Office", "Bureau of Economic Analysis", "Economic Development Administration", "Economic Research Service", "Economics and Statistics Administration", "Education Department", "Election Assistance Commission", "Office of Elementary and Secondary Education", "Employee Benefits Security Administration", "Employment and Training Administration", "Endangered Species Committee", "Energy Department", "Energy Information Administration", "English Language Acquisition Office", "Bureau of Engraving and Printing", "Office of Environmental Management", "Environmental Protection Agency", "Equal Employment Opportunity Commission", "European Command", "Executive Office for Immigration Review", "Export-Import Bank of the United States", "Fair Housing and Equal Opportunity", "Farm Credit Administration", "Farm Service Agency", "Federal Accounting Standards Advisory Board", "Federal Aviation Administration", "Federal Bureau of Investigation", "Federal Bureau of Prisons", "Federal Communications Commission", "Federal Consulting Group", "Federal Deposit Insurance Corporation", "Federal Election Commission", "Federal Emergency Management Agency", "Federal Energy Regulatory Commission", "Federal Executive Boards", "Federal Financial Institutions Examination Council", "Federal Financing Bank", "Federal Geographic Data Committee", "Federal Highway Administration", "Federal Home Loan Mortgage Corporation", "Federal Housing Finance Agency", "Federal Interagency Committee for the Management of Noxious and Exotic Weeds", "Federal Interagency Committee on Education", "Federal Interagency Council on Statistical Policy", "Federal Judicial Center", "Federal Labor Relations Authority", "Federal Laboratory Consortium for Technology Transfer", "Federal Law Enforcement Training Center", "Federal Library and Information Center Committee", "Federal Maritime Commission", "Federal Mediation and Conciliation Service", "Federal Mine Safety and Health Review Commission", "Federal Motor Carrier Safety Administration", "Federal National Mortgage Association", "Federal Railroad Administration", "Federal Reserve System", "Federal Retirement Thrift Investment Board", "Federal Student Aid Information Center", "Federal Trade Commission", "Federal Transit Administration", "Financial Management Service", "National Commission on Fiscal Responsibility and Reform", "Fish and Wildlife Service", "Food and Drug Administration", "Food Safety and Inspection Service", "Foreign Agricultural Service", "Foreign Claims Settlement Commission", "Forest Service", "Fulbright Foreign Scholarship Board", "General Services Administration", "U.S. Geological Survey", "Government Accountability Office", "Office of Government Ethics", "Government National Mortgage Association", "Government Printing Office", "Grain Inspection, Packers and Stockyards Administration", "Harry S. Truman Scholarship Foundation", "Health and Human Services Department", "Health Resources and Services Administration", "Healthy Homes and Lead Hazard Control Office", "Holocaust Memorial Museum", "Homeland Security Department", "House Office of the Inspector General", "House Office of the Clerk", "Illinois and Michigan Canal National Heritage Corridor Commission", "Immigration and Customs Enforcement agency", "Bureau of Indian Affairs", "Indian Arts and Crafts Board", "Indian Health Service", "Industrial College of the Armed Forces", "Bureau of Industry and Security", "Information Resource Management College", "Institute of Education Sciences", "Institute of Museum and Library Services", "Institute of Peace", "Inter-American Foundation", "Interagency Alternative Dispute Resolution Working Group", "Interagency Council on Homelessness", "Interior Department", "Internal Revenue Service", "Bureau of International Labor Affairs", "International Trade Administration", "International Trade Commission", "Railroad Retirement Board", "Bureau of Reclamation", "Office of Refugee Resettlement", "Regulatory Information Service Center", "Rehabilitation Services Administration", "Research and Innovative Technology Administration", "Bureau of Research, Education and Economics", "Risk Management Agency", "Rural Housing Service", "Rural Utilities Service", "Saint Lawrence Seaway Development Corporation", "Office of Science and Technology Policy", "Office of Science", "Office of Scientific and Technical Information", "Secret Service", "Securities and Exchange Commission", "Selective Service System", "Small Business Administration", "Smithsonian Institution", "Social Security Administration", "Social Security Advisory Board", "Southeastern Power Administration", "Southwestern Power Administration", "Special Forces Operations Command", "State Department", "State Justice Institute", "Stennis Center for Public Service", "Strategic Command", "Substance Abuse and Mental Health Services Administration", "Supreme Court of the United States", "Office of Surface Mining, Reclamation and Enforcement", "Surface Transportation Board", "Susquehanna River Basin Commission", "Taxpayer Advocacy Panel", "Trade and Development Agency", "Transportation Department", "Transportation Security Administration", "Bureau of Transportation Statistics", "Treasury Department", "U.S. Access Board", "Capitol Visitors’ Center", "U.S. Citizenship and Immigration Services", "Coast Guard", "Commodity Futures Trading Commission", "Election Assistance Commission", "U.S. Geological Survey", "International Trade Commission", "U.S. Mission to the United Nations", "U.S. Patent and Trademark Office", "United States Postal Service", "U.S. Sentencing Commission", "U.S. Trade and Development Agency", "U.S. Trade Representative", "Unified Combatant Commands", "Uniformed Services University of the Health Sciences", "United States Mint", "Veterans Affairs Department", "Veterans Benefits Administration", "Veterans Day National Committee", "Veterans' Employment and Training Service", "Vietnam Educational Foundation", "Weather Service", "Western Area Power Administration", "White House", "White House Commission on Presidential Scholars", "White House Commission on the National Moment of Remembrance", "White House Office of Administration", "Woodrow Wilson International Center for Scholars"];

var $_GET = (function() {
	var map = {};
	location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, k, v) {
		map[k] = v;
	});
	return map;
} ());


$agency_key = firstload && $_GET["g"] ? +$_GET["g"] : Math.round(Math.random() * $agencies.length);
$agency = $agencies[$agency_key];

$adverbs = ["a fundamentally", "an intrinsically ", "an inherently", "an obviously", "a historically", "a violently", "a universally recognized", "a congenitally", "a constitutionally", "a clearly", "a desperately", "a dramatically", "an overwhelmingly", "a comprehensively", "an unalloyedly"];
$adverb_key = firstload && $_GET["v"] ? +$_GET["v"] : Math.round(Math.random() * $adverbs.length);

$adverb = $adverbs[$adverb_key];

$adjectives  = ["socialist", "colonialist", "Kenyan", "neo-colonialist", "fascist", "anti-American", "subversive", "fascist", "Harvard elitist", "anti-capitalist", "Marxist", "radical Keynesian", "anarchist", "leftist", "anti-modern", "countercultural", "radical", "neo-Jihadist", "post-American", "historically ignorant", "unwashed Communist", "pro-madrassa", "post-national", "anti-property rights", "post-traditionalist"];
$adjective_key = firstload && $_GET["j"] ? +$_GET["j"] : Math.round(Math.random() * $adjectives.length);
$adjective = $adjectives[$adjective_key];

$sentence =  "The " + [$agency, "is", $adverb, $adjective, "institution."].join(" ");

$permalink = "?" + $.param({"j":$adjective_key, "g":$agency_key, "v":$adverb_key});
window.firstload = false;
 return {sentence : $sentence, permalink : $permalink, agency : $agency };
}

