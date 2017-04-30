export let sorts = [
  'None',
  'Highest Assets',
  'Lowest Assets',
  'Highest Revenue',
  'Lowest Revenue'
]

export let types = [
  'Any',
  'Arts and Culture',
  'Animals/Environment',
  'Child and Family Services',
  'Civil Rights/Advocacy',
  'Community and Neighborhoods',
  'Education',
  'Employment',
  'Food and Nutrition',
  'Grants',
  'International Affairs',
  'Legal Services/Crime Prevention',
  'Healthcare',
  'Housing',
  'Science, Technology and Research',
  'Sports and Recreation',
  'Religious Affiliated',
  'Other'
]

export let states = [{
  'name': 'Any',
  'abbr': 'Any'
},
{
  'name': 'Alabama',
  'abbr': 'AL'
},
{
  'name': 'Alaska',
  'abbr': 'AK'
},
{
  'name': 'American Samoa',
  'abbr': 'AS'
},
{
  'name': 'Arizona',
  'abbr': 'AZ'
},
{
  'name': 'Arkansas',
  'abbr': 'AR'
},
{
  'name': 'California',
  'abbr': 'CA'
},
{
  'name': 'Colorado',
  'abbr': 'CO'
},
{
  'name': 'Connecticut',
  'abbr': 'CT'
},
{
  'name': 'Delaware',
  'abbr': 'DE'
},
{
  'name': 'District Of Columbia',
  'abbr': 'DC'
},
{
  'name': 'Federated States Of Micronesia',
  'abbr': 'FM'
},
{
  'name': 'Florida',
  'abbr': 'FL'
},
{
  'name': 'Georgia',
  'abbr': 'GA'
},
{
  'name': 'Guam',
  'abbr': 'GU'
},
{
  'name': 'Hawaii',
  'abbr': 'HI'
},
{
  'name': 'Idaho',
  'abbr': 'ID'
},
{
  'name': 'Illinois',
  'abbr': 'IL'
},
{
  'name': 'Indiana',
  'abbr': 'IN'
},
{
  'name': 'Iowa',
  'abbr': 'IA'
},
{
  'name': 'Kansas',
  'abbr': 'KS'
},
{
  'name': 'Kentucky',
  'abbr': 'KY'
},
{
  'name': 'Louisiana',
  'abbr': 'LA'
},
{
  'name': 'Maine',
  'abbr': 'ME'
},
{
  'name': 'Marshall Islands',
  'abbr': 'MH'
},
{
  'name': 'Maryland',
  'abbr': 'MD'
},
{
  'name': 'Massachusetts',
  'abbr': 'MA'
},
{
  'name': 'Michigan',
  'abbr': 'MI'
},
{
  'name': 'Minnesota',
  'abbr': 'MN'
},
{
  'name': 'Mississippi',
  'abbr': 'MS'
},
{
  'name': 'Missouri',
  'abbr': 'MO'
},
{
  'name': 'Montana',
  'abbr': 'MT'
},
{
  'name': 'Nebraska',
  'abbr': 'NE'
},
{
  'name': 'Nevada',
  'abbr': 'NV'
},
{
  'name': 'New Hampshire',
  'abbr': 'NH'
},
{
  'name': 'New Jersey',
  'abbr': 'NJ'
},
{
  'name': 'New Mexico',
  'abbr': 'NM'
},
{
  'name': 'New York',
  'abbr': 'NY'
},
{
  'name': 'North Carolina',
  'abbr': 'NC'
},
{
  'name': 'North Dakota',
  'abbr': 'ND'
},
{
  'name': 'Northern Mariana Islands',
  'abbr': 'MP'
},
{
  'name': 'Ohio',
  'abbr': 'OH'
},
{
  'name': 'Oklahoma',
  'abbr': 'OK'
},
{
  'name': 'Oregon',
  'abbr': 'OR'
},
{
  'name': 'Palau',
  'abbr': 'PW'
},
{
  'name': 'Pennsylvania',
  'abbr': 'PA'
},
{
  'name': 'Puerto Rico',
  'abbr': 'PR'
},
{
  'name': 'Rhode Island',
  'abbr': 'RI'
},
{
  'name': 'South Carolina',
  'abbr': 'SC'
},
{
  'name': 'South Dakota',
  'abbr': 'SD'
},
{
  'name': 'Tennessee',
  'abbr': 'TN'
},
{
  'name': 'Texas',
  'abbr': 'TX'
},
{
  'name': 'Utah',
  'abbr': 'UT'
},
{
  'name': 'Vermont',
  'abbr': 'VT'
},
{
  'name': 'Virgin Islands',
  'abbr': 'VI'
},
{
  'name': 'Virginia',
  'abbr': 'VA'
},
{
  'name': 'Washington',
  'abbr': 'WA'
},
{
  'name': 'West Virginia',
  'abbr': 'WV'
},
{
  'name': 'Wisconsin',
  'abbr': 'WI'
},
{
  'name': 'Wyoming',
  'abbr': 'WY'
}
]

export let taxDescription = {
  'elf': {
    'desc': 'E-file indicator',
    'type': 'Char'
  },
  'EIN': {
    'desc': 'Employer Identification Number',
    'type': 'none'
  },
  'tax_pd': {
    'desc': 'Tax period',
    'type': 'none'
  },
  'subseccd': {
    'desc': 'Subsection code',
    'type': 'none'
  },
  's501c3or4947a1cd': {
    'desc': 'Described in 501(c)(3)?',
    'type': 'Char'
  },
  'schdbind': {
    'desc': 'Schedule B required?',
    'type': 'Char'
  },
  'politicalactvtscd': {
    'desc': 'Political activities?',
    'type': 'Char'
  },
  'lbbyingactvtscd': {
    'desc': 'Lobbying activities?',
    'type': 'Char'
  },
  'subjto6033cd': {
    'desc': 'Subject to proxy tax?',
    'type': 'Char'
  },
  'dnradvisedfundscd': {
    'desc': 'Donor advised funds?',
    'type': 'Char'
  },
  'prptyintrcvdcd': {
    'desc': 'Conservation easements?',
    'type': 'Char'
  },
  'maintwrkofartcd': {
    'desc': 'Collections of art?',
    'type': 'Char'
  },
  'crcounselingqstncd': {
    'desc': 'Credit counseling?',
    'type': 'Char'
  },
  'hldassetsintermpermcd': {
    'desc': 'Term or permanent endowments?',
    'type': 'Char'
  },
  'rptlndbldgeqptcd': {
    'desc': 'Land buildings and equipment reported?',
    'type': 'Char'
  },
  'rptinvstothsecd': {
    'desc': 'Investments in other securities reported?',
    'type': 'Char'
  },
  'rptinvstprgrelcd': {
    'desc': 'Program related investments reported?',
    'type': 'Char'
  },
  'rptothasstcd': {
    'desc': 'Other assets reported?',
    'type': 'Char'
  },
  'rptothliabcd': {
    'desc': 'Other liabilities reported?',
    'type': 'Char'
  },
  'sepcnsldtfinstmtcd': {
    'desc': 'Separate consolidated financial statement',
    'type': 'Char'
  },
  'sepindaudfinstmtcd': {
    'desc': 'Separate audited financial statement',
    'type': 'Char'
  },
  'inclinfinstmtcd': {
    'desc': 'Included in consolidated financial statements?',
    'type': 'Char'
  },
  'operateschools170cd': {
    'desc': 'School?',
    'type': 'Char'
  },
  'frgnofficecd': {
    'desc': 'Foreign office?',
    'type': 'Char'
  },
  'frgnrevexpnscd': {
    'desc': 'Foreign activities, etc?',
    'type': 'Char'
  },
  'frgngrntscd': {
    'desc': 'More than $5000 to organizations Part IX, line 3?',
    'type': 'Char'
  },
  'frgnaggragrntscd': {
    'desc': 'More than $5000 to individuals Part IX, line 3?',
    'type': 'Char'
  },
  'rptprofndrsngfeescd': {
    'desc': 'Professional fundraising?',
    'type': 'Char'
  },
  'rptincfnndrsngcd': {
    'desc': 'Fundraising activities?',
    'type': 'Char'
  },
  'rptincgamingcd': {
    'desc': 'Gaming?',
    'type': 'Char'
  },
  'operatehosptlcd': {
    'desc': 'Hospital?',
    'type': 'Char'
  },
  'hospaudfinstmtcd': {
    'desc': 'Hospital audited financial statement included?',
    'type': 'Char'
  },
  'rptgrntstogovtcd': {
    'desc': 'Grants to organizations?',
    'type': 'Char'
  },
  'rptgrntstoindvcd': {
    'desc': 'Grants to individuals?',
    'type': 'Char'
  },
  'rptyestocompnstncd': {
    'desc': 'Schedule J required?',
    'type': 'Char'
  },
  'txexmptbndcd': {
    'desc': 'Tax exempt bonds?',
    'type': 'Char'
  },
  'invstproceedscd': {
    'desc': 'Investment income?',
    'type': 'Char'
  },
  'maintescrwaccntcd': {
    'desc': 'Escrow account?',
    'type': 'Char'
  },
  'actonbehalfcd': {
    'desc': 'On behalf of issuer?',
    'type': 'Char'
  },
  'engageexcessbnftcd': {
    'desc': 'Excess benefit transaction?',
    'type': 'Char'
  },
  'awarexcessbnftcd': {
    'desc': 'Prior excess benefit transaction?',
    'type': 'Char'
  },
  'loantofficercd': {
    'desc': 'Loan to officer or DQP?',
    'type': 'Char'
  },
  'grantoofficercd': {
    'desc': 'Grant to related person?',
    'type': 'Char'
  },
  'dirbusnreltdcd': {
    'desc': 'Business relationship with organization?',
    'type': 'Char'
  },
  'fmlybusnreltdcd': {
    'desc': 'Business relationship thru family member?',
    'type': 'Char'
  },
  'servasofficercd': {
    'desc': 'Officer, etc. of entity with business relationship?',
    'type': 'Char'
  },
  'recvnoncashcd': {
    'desc': 'Deductible non-cash contributions?',
    'type': 'Char'
  },
  'recvartcd': {
    'desc': 'Deductible contributions of art, etc?',
    'type': 'Char'
  },
  'ceaseoperationscd': {
    'desc': 'Terminated?',
    'type': 'Char'
  },
  'sellorexchcd': {
    'desc': 'Partial liquidation?',
    'type': 'Char'
  },
  'ownsepentcd': {
    'desc': 'Disregarded entity?',
    'type': 'Char'
  },
  'reltdorgcd': {
    'desc': 'Related entity?',
    'type': 'Char'
  },
  'intincntrlcd': {
    'desc': 'Related organization a controlled entity?',
    'type': 'Char'
  },
  'orgtrnsfrcd': {
    'desc': 'Any transfers to exempt non-charitable org?',
    'type': 'Char'
  },
  'conduct5percentcd': {
    'desc': 'Activities conducted thru partnership?',
    'type': 'Char'
  },
  'compltschocd': {
    'desc': 'Schedule O completed?',
    'type': 'Char'
  },
  'f1096cnt': {
    'desc': 'Number forms transmitted with 1096',
    'type': 'none'
  },
  'fw2gcnt': {
    'desc': 'Number W-2Gs included in 1a',
    'type': 'none'
  },
  'wthldngrulescd': {
    'desc': 'Compliance with backup witholding?',
    'type': 'Char'
  },
  'noemplyeesw3cnt': {
    'desc': 'Number of employees',
    'type': 'none'
  },
  'filerqrdrtnscd': {
    'desc': 'Employment tax returns filed?',
    'type': 'Char'
  },
  'unrelbusinccd': {
    'desc': 'Unrelated business income?',
    'type': 'Char'
  },
  'filedf990tcd': {
    'desc': 'Form 990-T filed?',
    'type': 'Char'
  },
  'frgnacctcd': {
    'desc': 'Foreign financial account?',
    'type': 'Char'
  },
  'prohibtdtxshltrcd': {
    'desc': 'Prohibited tax shelter transaction?',
    'type': 'Char'
  },
  'prtynotifyorgcd': {
    'desc': 'Taxable party notification?',
    'type': 'Char'
  },
  'filedf8886tcd': {
    'desc': 'Form 8886-T filed?',
    'type': 'Char'
  },
  'solicitcntrbcd': {
    'desc': 'Non-deductible contributions?',
    'type': 'Char'
  },
  'exprstmntcd': {
    'desc': 'Non-deduct. disclosure?',
    'type': 'Char'
  },
  'providegoodscd': {
    'desc': 'Quid pro quo contributions?',
    'type': 'Char'
  },
  'notfydnrvalcd': {
    'desc': 'Quid pro quo disclosure?',
    'type': 'Char'
  },
  'filedf8282cd': {
    'desc': 'Form 8282 property disposed of?',
    'type': 'Char'
  },
  'f8282cnt': {
    'desc': 'Number of 8282s filed',
    'type': 'none'
  },
  'fndsrcvdcd': {
    'desc': 'Funds to pay premiums?',
    'type': 'Char'
  },
  'premiumspaidcd': {
    'desc': 'Premiums paid?',
    'type': 'Char'
  },
  'filedf8899cd': {
    'desc': 'Form 8899 filed?',
    'type': 'Char'
  },
  'filedf1098ccd': {
    'desc': 'Form 1098-C filed?',
    'type': 'Char'
  },
  'excbushldngscd': {
    'desc': 'Excess business holdings?',
    'type': 'Char'
  },
  's4966distribcd': {
    'desc': 'Taxable distributions?',
    'type': 'Char'
  },
  'distribtodonorcd': {
    'desc': 'Distribution to donor?',
    'type': 'Char'
  },
  'initiationfees': {
    'desc': 'Initiation fees amount',
    'type': 'Num'
  },
  'grsrcptspublicuse': {
    'desc': 'Gross receipts amount',
    'type': 'Num'
  },
  'grsincmembers': {
    'desc': 'Gross income from members',
    'type': 'Num'
  },
  'grsincother': {
    'desc': 'Gross income from other sources',
    'type': 'Num'
  },
  'filedlieuf1041cd': {
    'desc': 'Form 990 in lieu of 1041?',
    'type': 'Char'
  },
  'txexmptint': {
    'desc': 'Tax exempt interest in lieu of 1041',
    'type': 'Num'
  },
  'qualhlthplncd': {
    'desc': 'Qualified health plan in multiple states',
    'type': 'Char'
  },
  'qualhlthreqmntn': {
    'desc': 'Qualified health plan reserves required',
    'type': 'Num'
  },
  'qualhlthonhnd': {
    'desc': 'Qualified health plan reserves on hand',
    'type': 'Num'
  },
  'rcvdpdtngcd': {
    'desc': 'Payments for indoor tanning',
    'type': 'Char'
  },
  'filedf720cd': {
    'desc': 'Filed Form 720 for tanning',
    'type': 'Char'
  },
  'totreprtabled': {
    'desc': 'Reportable compensation from organization',
    'type': 'Num'
  },
  'totcomprelatede': {
    'desc': 'Reportable compensation from related orgs',
    'type': 'Num'
  },
  'totestcompf': {
    'desc': 'Other compensation',
    'type': 'Num'
  },
  'noindiv100kcnt': {
    'desc': 'Number individuals greater than $100K',
    'type': 'none'
  },
  'nocontractor100kcnt': {
    'desc': 'Number of contractors greater than $100K',
    'type': 'none'
  },
  'totcntrbgfts': {
    'desc': 'Total contributions',
    'type': 'Num'
  },
  'prgmservcode2acd': {
    'desc': 'Program service revenue code 2a',
    'type': 'Num'
  },
  'totrev2acola': {
    'desc': 'Program service revenue amount 2a',
    'type': 'Num'
  },
  'prgmservcode2bcd': {
    'desc': 'Program service revenue code 2b',
    'type': 'Num'
  },
  'totrev2bcola': {
    'desc': 'Program service revenue amount 2b',
    'type': 'Num'
  },
  'prgmservcode2ccd': {
    'desc': 'Program service revenue code 2c',
    'type': 'Num'
  },
  'totrev2ccola': {
    'desc': 'Program service revenue amount 2c',
    'type': 'Num'
  },
  'prgmservcode2dcd': {
    'desc': 'Program service revenue code 2d',
    'type': 'Num'
  },
  'totrev2dcola': {
    'desc': 'Program service revenue amount 2d',
    'type': 'Num'
  },
  'prgmservcode2ecd': {
    'desc': 'Program service revenue code 2e',
    'type': 'Num'
  },
  'totrev2ecola': {
    'desc': 'Program service revenue amount 2e',
    'type': 'Num'
  },
  'totrev2fcola': {
    'desc': 'Program service revenue amount 2f',
    'type': 'Num'
  },
  'totprgmrevnue': {
    'desc': 'Program service revenue',
    'type': 'Num'
  },
  'invstmntinc': {
    'desc': 'Investment income',
    'type': 'Num'
  },
  'txexmptbndsproceeds': {
    'desc': 'Tax-exempt bond proceeds',
    'type': 'Num'
  },
  'royaltsinc': {
    'desc': 'Royalties',
    'type': 'Num'
  },
  'grsrntsreal': {
    'desc': 'Gross rents -- Real estate',
    'type': 'Num'
  },
  'grsrntsprsnl': {
    'desc': 'Gross rents -- Personal property',
    'type': 'Num'
  },
  'rntlexpnsreal': {
    'desc': 'Rental expense -- Real estate',
    'type': 'Num'
  },
  'rntlexpnsprsnl': {
    'desc': 'Rental expense -- Personal property',
    'type': 'Num'
  },
  'rntlincreal': {
    'desc': 'Net rent -- Real estate',
    'type': 'Num'
  },
  'rntlincprsnl': {
    'desc': 'Net rent -- Personal property',
    'type': 'Num'
  },
  'netrntlinc': {
    'desc': 'Net rental income',
    'type': 'Num'
  },
  'grsalesecur': {
    'desc': 'Gross sales -- Securities',
    'type': 'Num'
  },
  'grsalesothr': {
    'desc': 'Gross sales -- Other assets',
    'type': 'Num'
  },
  'cstbasisecur': {
    'desc': 'Sales expense -- Securities',
    'type': 'Num'
  },
  'cstbasisothr': {
    'desc': 'Sales expense -- Other assets',
    'type': 'Num'
  },
  'gnlsecur': {
    'desc': 'Net gain from sales -- Securities',
    'type': 'Num'
  },
  'gnlsothr': {
    'desc': 'Net gain from sales -- Other assets',
    'type': 'Num'
  },
  'netgnls': {
    'desc': 'Sales of assets',
    'type': 'Num'
  },
  'grsincfndrsng': {
    'desc': 'Gross fundraising',
    'type': 'Num'
  },
  'lessdirfndrsng': {
    'desc': 'Fundraising expenses',
    'type': 'Num'
  },
  'netincfndrsng': {
    'desc': 'Fundraising income',
    'type': 'Num'
  },
  'grsincgaming': {
    'desc': 'Gross income from gaming',
    'type': 'Num'
  },
  'lessdirgaming': {
    'desc': 'Gaming expenses',
    'type': 'Num'
  },
  'netincgaming': {
    'desc': 'Gaming income',
    'type': 'Num'
  },
  'grsalesinvent': {
    'desc': 'Gross sales of inventory',
    'type': 'Num'
  },
  'lesscstofgoods': {
    'desc': 'Cost of goods sold (inventory)',
    'type': 'Num'
  },
  'netincsales': {
    'desc': 'Income from sales of inventory',
    'type': 'Num'
  },
  'miscrev11acd': {
    'desc': 'Other revenue code 11a',
    'type': 'Num'
  },
  'miscrevtota': {
    'desc': 'Other revenue amount 11a',
    'type': 'Num'
  },
  'miscrev11bcd': {
    'desc': 'Other revenue code 11b',
    'type': 'Num'
  },
  'miscrevtot11b': {
    'desc': 'Other revenue amount 11b',
    'type': 'Num'
  },
  'miscrev11ccd': {
    'desc': 'Other revenue code 11c',
    'type': 'Num'
  },
  'miscrevtot11c': {
    'desc': 'Other revenue amount 11c',
    'type': 'Num'
  },
  'miscrevtot11d': {
    'desc': 'Other revenue amount 11d',
    'type': 'Num'
  },
  'miscrevtot11e': {
    'desc': 'Other revenue',
    'type': 'Num'
  },
  'totrevenue': {
    'desc': 'Total revenue',
    'type': 'Num'
  },
  'grntstogovt': {
    'desc': 'Grants to governments/orgs in the US',
    'type': 'Num'
  },
  'grnsttoindiv': {
    'desc': 'Grants to individuals in the US',
    'type': 'Num'
  },
  'grntstofrgngovt': {
    'desc': 'Grants to orgs and individuals outside the US',
    'type': 'Num'
  },
  'benifitsmembrs': {
    'desc': 'Benefits paid to or for members',
    'type': 'Num'
  },
  'compnsatncurrofcr': {
    'desc': 'Compensation of current officers, directors, etc ',
    'type': 'Num'
  },
  'compnsatnandothr': {
    'desc': 'Compensation of disqualified persons',
    'type': 'Num'
  },
  'othrsalwages': {
    'desc': 'Other salaries and wages',
    'type': 'Num'
  },
  'pensionplancontrb': {
    'desc': 'Pension plan contributions',
    'type': 'Num'
  },
  'othremplyeebenef': {
    'desc': 'Other employee benefits',
    'type': 'Num'
  },
  'payrolltx': {
    'desc': 'Payroll taxes',
    'type': 'Num'
  },
  'feesforsrvcmgmt': {
    'desc': 'Management fees',
    'type': 'Num'
  },
  'legalfees': {
    'desc': 'Legal fees',
    'type': 'Num'
  },
  'accntingfees': {
    'desc': 'Accounting fees',
    'type': 'Num'
  },
  'feesforsrvclobby': {
    'desc': 'Lobbying fees',
    'type': 'Num'
  },
  'profndraising': {
    'desc': 'Professional fundraising fees',
    'type': 'Num'
  },
  'feesforsrvcinvstmgmt': {
    'desc': 'Investment management feed',
    'type': 'Num'
  },
  'feesforsrvcothr': {
    'desc': 'Other fees',
    'type': 'Num'
  },
  'advrtpromo': {
    'desc': 'Advertising and promotion',
    'type': 'Num'
  },
  'officexpns': {
    'desc': 'Office expenses',
    'type': 'Num'
  },
  'infotech': {
    'desc': 'Information technology',
    'type': 'Num'
  },
  'royaltsexpns': {
    'desc': 'Royalties',
    'type': 'Num'
  },
  'occupancy': {
    'desc': 'Occupancy',
    'type': 'Num'
  },
  'travel': {
    'desc': 'Travel',
    'type': 'Num'
  },
  'travelofpublicoffcl': {
    'desc': 'Travel/entertainment expenses to public officials',
    'type': 'Num'
  },
  'converconventmtng': {
    'desc': 'Conferences, conventions, meetings',
    'type': 'Num'
  },
  'pymtoaffiliates': {
    'desc': 'Payments to affiliates',
    'type': 'Num'
  },
  'deprcatndepletn': {
    'desc': 'Depreciation, depletion, amortization',
    'type': 'Num'
  },
  'insurance': {
    'desc': 'Insurance',
    'type': 'Num'
  },
  'othrexpnsa': {
    'desc': 'Other expenses 24a',
    'type': 'Num'
  },
  'othrexpnsb': {
    'desc': 'Other expenses 24b',
    'type': 'Num'
  },
  'othrexpnsc': {
    'desc': 'Other expenses 24c',
    'type': 'Num'
  },
  'othrexpnsd': {
    'desc': 'Other expenses 24d',
    'type': 'Num'
  },
  'othrexpnse': {
    'desc': 'Other expenses 24e',
    'type': 'Num'
  },
  'othrexpnsf': {
    'desc': 'Other expenses 24f',
    'type': 'Num'
  },
  'totfuncexpns': {
    'desc': 'Total functional expenses',
    'type': 'Num'
  },
  'nonintcashend': {
    'desc': 'Cash -- non-interest bearing -- eoy',
    'type': 'Num'
  },
  'svngstempinvend': {
    'desc': 'Savings and temporary cash investments -- eoy',
    'type': 'Num'
  },
  'pldgegrntrcvblend': {
    'desc': 'Pledges and grants receivable -- eoy',
    'type': 'Num'
  },
  'accntsrcvblend': {
    'desc': 'Accounts receivable -- eoy',
    'type': 'Num'
  },
  'currfrmrcvblend': {
    'desc': 'Receivables from officers, directors, etc. -- eoy',
    'type': 'Num'
  },
  'rcvbldisqualend': {
    'desc': 'Receivables from disqualified persons -- eoy',
    'type': 'Num'
  },
  'notesloansrcvblend': {
    'desc': 'Notes and loans receivables -- eoy',
    'type': 'Num'
  },
  'invntriesalesend': {
    'desc': 'Inventories for sale or use -- eoy',
    'type': 'Num'
  },
  'prepaidexpnsend': {
    'desc': 'Prepaid expenses or deferred charges -- eoy',
    'type': 'Num'
  },
  'lndbldgsequipend': {
    'desc': 'Land, buildings, & equipment (net) -- eoy',
    'type': 'Num'
  },
  'invstmntsend': {
    'desc': 'Investments in publicly traded securities -- eoy',
    'type': 'Num'
  },
  'invstmntsothrend': {
    'desc': 'Investments in other securities -- eoy',
    'type': 'Num'
  },
  'invstmntsprgmend': {
    'desc': 'Program-related investments -- eoy',
    'type': 'Num'
  },
  'intangibleassetsend': {
    'desc': 'Intangible assets -- eoy',
    'type': 'Num'
  },
  'othrassetsend': {
    'desc': 'Other assets -- eoy',
    'type': 'Num'
  },
  'accntspayableend': {
    'desc': 'Accounts payable and accrued expenses -- eoy',
    'type': 'Num'
  },
  'grntspayableend': {
    'desc': 'Grants payable -- eoy',
    'type': 'Num'
  },
  'deferedrevnuend': {
    'desc': 'Deferred revenue -- eoy',
    'type': 'Num'
  },
  'txexmptbndsend': {
    'desc': 'Tax-exempt bond liabilities -- eoy',
    'type': 'Num'
  },
  'escrwaccntliabend': {
    'desc': 'Escrow account liability -- eoy',
    'type': 'Num'
  },
  'paybletoffcrsend': {
    'desc': 'Payables to officers, directors, etc. -- eoy',
    'type': 'Num'
  },
  'secrdmrtgsend': {
    'desc': 'Secured mortgages and notes payable -- eoy',
    'type': 'Num'
  },
  'unsecurednotesend': {
    'desc': 'Unsecured mortgages and notes payable -- eoy',
    'type': 'Num'
  },
  'othrliabend': {
    'desc': 'Other liabilities -- eoy',
    'type': 'Num'
  },
  'unrstrctnetasstsend': {
    'desc': 'Unrestricted net assets -- eoy',
    'type': 'Num'
  },
  'temprstrctnetasstsend': {
    'desc': 'Temporarily restricted net assets -- eoy',
    'type': 'Num'
  },
  'permrstrctnetasstsend': {
    'desc': 'Permanently restricted net assets -- eoy',
    'type': 'Num'
  },
  'capitalstktrstend': {
    'desc': 'Capital stock or trust principal -- eoy',
    'type': 'Num'
  },
  'paidinsurplusend': {
    'desc': 'Paid-in or capital surplus -- eoy',
    'type': 'Num'
  },
  'retainedearnend': {
    'desc': 'Retained earnings -- eoy',
    'type': 'Num'
  },
  'totnetassetend': {
    'desc': 'Total Net Assets -- eoy',
    'type': 'Num'
  },
  'totnetliabastend': {
    'desc': 'Total Liabilities + Net Assets -- eoy',
    'type': 'Num'
  },
  'nonpfrea': {
    'desc': 'Reason for non-PF status',
    'type': 'Num'
  },
  'totnooforgscnt': {
    'desc': 'Number of organizations supported',
    'type': 'none'
  },
  'totsupport': {
    'desc': 'Sum of amounts of support',
    'type': 'Num'
  },
  'gftgrntsrcvd170': {
    'desc': 'Gifts grants membership fees received (170)',
    'type': 'Num'
  },
  'txrevnuelevied170': {
    'desc': 'Tax revenues levied (170)',
    'type': 'Num'
  },
  'srvcsval170': {
    'desc': 'Services or facilities furnished by gov (170)',
    'type': 'Num'
  },
  'pubsuppsubtot170': {
    'desc': 'Public support subtotal (170)',
    'type': 'Num'
  },
  'exceeds2pct170': {
    'desc': 'Amount support exceeds total (170)',
    'type': 'Num'
  },
  'pubsupplesspct170': {
    'desc': 'Public support (170)',
    'type': 'Num'
  },
  'samepubsuppsubtot170': {
    'desc': 'Public support from line 4 (170)',
    'type': 'Num'
  },
  'grsinc170': {
    'desc': 'Gross income from interest etc (170)',
    'type': 'Num'
  },
  'netincunreltd170': {
    'desc': 'Net UBI (170)',
    'type': 'Num'
  },
  'othrinc170': {
    'desc': 'Other income (170)',
    'type': 'Num'
  },
  'totsupp170': {
    'desc': 'Total support (170)',
    'type': 'Num'
  },
  'grsrcptsrelated170': {
    'desc': 'Gross receipts from related activities (170)',
    'type': 'Num'
  },
  'totgftgrntrcvd509': {
    'desc': 'Gifts grants membership fees received (509)',
    'type': 'Num'
  },
  'grsrcptsadmissn509': {
    'desc': 'Receipts from admissions merchandise etc (509)',
    'type': 'Num'
  },
  'grsrcptsactivities509': {
    'desc': 'Gross receipts from related activities (509)',
    'type': 'Num'
  },
  'txrevnuelevied509': {
    'desc': 'Tax revenues levied (509)',
    'type': 'Num'
  },
  'srvcsval509': {
    'desc': 'Services or facilities furnished by gov (509)',
    'type': 'Num'
  },
  'pubsuppsubtot509': {
    'desc': 'Public support subtotal (509)',
    'type': 'Num'
  },
  'rcvdfrmdisqualsub509': {
    'desc': 'Amounts from disqualified persons (509)',
    'type': 'Num'
  },
  'exceeds1pct509': {
    'desc': 'Amount support exceeds total (509)',
    'type': 'Num'
  },
  'subtotpub509': {
    'desc': 'Public support subtotal (509)',
    'type': 'Num'
  },
  'pubsupplesub509': {
    'desc': 'Public support (509)',
    'type': 'Num'
  },
  'samepubsuppsubtot509': {
    'desc': 'Public support from line 6 (509)',
    'type': 'Num'
  },
  'grsinc509': {
    'desc': 'Gross income from interest etc (509)',
    'type': 'Num'
  },
  'unreltxincls511tx509': {
    'desc': 'Net UBI (509)',
    'type': 'Num'
  },
  'subtotsuppinc509': {
    'desc': 'Subtotal total support (509)',
    'type': 'Num'
  },
  'netincunrelatd509': {
    'desc': 'Net income from UBI not in 10b (509)',
    'type': 'Num'
  },
  'othrinc509': {
    'desc': 'Other income (509)',
    'type': 'Num'
  },
  'totsupp509': {
    'desc': 'Total support (509)',
    'type': 'Num'
  },
  'tax_prd': {
    'desc': 'Tax period (YYYYMM format)',
    'type': 'none'
  },
  'totcntrbs': {
    'desc': 'Contributions, gifts, grants, etc received',
    'type': 'Num'
  },
  'prgmservrev': {
    'desc': 'Program service revenue',
    'type': 'Num'
  },
  'duesassesmnts': {
    'desc': 'Membership dues and assessments',
    'type': 'Num'
  },
  'othrinvstinc': {
    'desc': 'Investment income',
    'type': 'Num'
  },
  'grsamtsalesastothr': {
    'desc': 'Gross amount from sale of assets ',
    'type': 'Num'
  },
  'basisalesexpnsothr': {
    'desc': 'Cost or other basis and sales expenses',
    'type': 'Num'
  },
  'gnsaleofastothr': {
    'desc': 'Gain or (loss) from sale of assets',
    'type': 'Num'
  },
  'grsrevnuefndrsng': {
    'desc': 'Special events gross revenue',
    'type': 'Num'
  },
  'direxpns': {
    'desc': 'Special events direct expenses',
    'type': 'Num'
  },
  'grsalesminusret': {
    'desc': 'Gross sales of inventory',
    'type': 'Num'
  },
  'costgoodsold': {
    'desc': 'Less: cost of goods sold',
    'type': 'Num'
  },
  'grsprft': {
    'desc': 'Gross profit (or loss) from sales of inventory',
    'type': 'Num'
  },
  'othrevnue': {
    'desc': 'Other revenue - total',
    'type': 'Num'
  },
  'totrevnue': {
    'desc': 'Total revenue',
    'type': 'Num'
  },
  'totexpns': {
    'desc': 'Total expenses',
    'type': 'Num'
  },
  'totexcessyr': {
    'desc': 'Excess or deficit',
    'type': 'Num'
  },
  'othrchgsnetassetfnd': {
    'desc': 'Other changes in net assets',
    'type': 'Num'
  },
  'networthend': {
    'desc': 'Net assets EOY',
    'type': 'Num'
  },
  'totnetassetsend': {
    'desc': 'Total net worth e-o-y',
    'type': 'Num'
  },
  'actvtynotprevrptcd': {
    'desc': 'Activity not previously reported?',
    'type': 'Char'
  },
  'chngsinorgcd': {
    'desc': 'Significant changes to governing docs?',
    'type': 'Char'
  },
  'unrelbusincd': {
    'desc': 'UBI over $1,000?',
    'type': 'Char'
  },
  'contractioncd': {
    'desc': 'Liquidation, dissolution, termination, or contraction',
    'type': 'Char'
  },
  'politicalexpend': {
    'desc': 'Direct or indirect political expenditures.',
    'type': 'Num'
  },
  'filedf1120polcd': {
    'desc': 'File Form 1120-POL?',
    'type': 'Char'
  },
  'loanstoofficerscd': {
    'desc': 'Loans to/from officers, directors or trustees?',
    'type': 'Char'
  },
  'loanstoofficers': {
    'desc': 'Amount of loans to/from officers',
    'type': 'Num'
  },
  'initiationfee': {
    'desc': 'Initiation fees and capital contributions',
    'type': 'Num'
  },
  'grspublicrcpts': {
    'desc': 'Gross receipts for public use of club facilities',
    'type': 'Num'
  },
  's4958excessbenefcd': {
    'desc': 'Section 4958 excess benefit transactions?',
    'type': 'Char'
  },
  'eostatus': {
    'desc': 'EO Status Code',
    'type': 'Char'
  },
  'tax_yr': {
    'desc': 'SOI Year',
    'type': 'Num'
  },
  'operatingcd': {
    'desc': 'Operating foundation code',
    'type': 'Char'
  },
  'subcd': {
    'desc': 'Subsection code',
    'type': 'Char'
  },
  'fairmrktvalamt': {
    'desc': 'Total assets – e-o-y fair market value ',
    'type': 'Num'
  },
  'grscontrgifts': {
    'desc': 'Contributions received',
    'type': 'Num'
  },
  'schedbind': {
    'desc': 'Schedule B indicator',
    'type': 'Char'
  },
  'intrstrvnue': {
    'desc': 'Interest revenue',
    'type': 'Num'
  },
  'dividndsamt': {
    'desc': 'Dividends',
    'type': 'Num'
  },
  'grsrents': {
    'desc': 'Gross rents',
    'type': 'Num'
  },
  'grsslspramt': {
    'desc': 'Gross sales price for assets ',
    'type': 'Num'
  },
  'costsold': {
    'desc': 'Cost-of-goods-sold',
    'type': 'Num'
  },
  'grsprofitbus': {
    'desc': 'Gross profit',
    'type': 'Num'
  },
  'otherincamt': {
    'desc': 'Other income',
    'type': 'Num'
  },
  'totrcptperbks': {
    'desc': 'Total revenue',
    'type': 'Num'
  },
  'compofficers': {
    'desc': 'Compensation of officers',
    'type': 'Num'
  },
  'pensplemplbenf': {
    'desc': 'Pension plans, employee benefits ',
    'type': 'Num'
  },
  'legalfeesamt': {
    'desc': 'Legal fees',
    'type': 'Num'
  },
  'accountingfees': {
    'desc': 'Accounting fees',
    'type': 'Num'
  },
  'interestamt': {
    'desc': 'Interest',
    'type': 'Num'
  },
  'depreciationamt': {
    'desc': 'Depreciation and depletion',
    'type': 'Num'
  },
  'occupancyamt': {
    'desc': 'Occupancy',
    'type': 'Num'
  },
  'travlconfmtngs': {
    'desc': 'Travel, conferences, and meetings',
    'type': 'Num'
  },
  'printingpubl': {
    'desc': 'Printing and publications',
    'type': 'Num'
  },
  'topradmnexpnsa': {
    'desc': 'Total operating and administrative expenses column a ',
    'type': 'Num'
  },
  'contrpdpbks': {
    'desc': 'Contributions, gifts, grants paid',
    'type': 'Num'
  },
  'totexpnspbks': {
    'desc': 'Total expenses',
    'type': 'Num'
  },
  'excessrcpts': {
    'desc': 'Net income less deficit',
    'type': 'Num'
  },
  'totrcptnetinc': {
    'desc': 'Total receipts net investment income',
    'type': 'Num'
  },
  'topradmnexpnsb': {
    'desc': 'Total operating and administrative expenses column b ',
    'type': 'Num'
  },
  'totexpnsnetinc': {
    'desc': 'Total expenses net investment income',
    'type': 'Num'
  },
  'netinvstinc': {
    'desc': 'Net investment income',
    'type': 'Num'
  },
  'trcptadjnetinc': {
    'desc': 'Total receipts adjusted net income',
    'type': 'Num'
  },
  'totexpnsadjnet': {
    'desc': 'Total expenses adjusted net income',
    'type': 'Num'
  },
  'adjnetinc': {
    'desc': 'Adjusted net income',
    'type': 'Num'
  },
  'topradmnexpnsd': {
    'desc': 'Total operating and administrative expenses column d',
    'type': 'Num'
  },
  'totexpnsexempt': {
    'desc': 'Total expenses – exempt purpose',
    'type': 'Num'
  },
  'othrcashamt': {
    'desc': 'Cash non-interest-bearing – e-o-y book value',
    'type': 'Num'
  },
  'invstgovtoblig': {
    'desc': 'Investments in U.S. & state government obligations – e-o-y book value',
    'type': 'Num'
  },
  'invstcorpstk': {
    'desc': 'Investments in corporate stock – e-o-y book value',
    'type': 'Num'
  },
  'invstcorpbnd': {
    'desc': 'Investments in corporate bonds– e-o-y book value',
    'type': 'Num'
  },
  'totinvstsec': {
    'desc': 'Total investments in securities – e-o-y book value',
    'type': 'Num'
  },
  'mrtgloans': {
    'desc': 'Investments mortgage loans – e-o-y book value',
    'type': 'Num'
  },
  'othrinvstend': {
    'desc': 'Other investments – e-o-y book value',
    'type': 'Num'
  },
  'othrassetseoy': {
    'desc': 'Other assets – e-o-y book value',
    'type': 'Num'
  },
  'totassetsend': {
    'desc': 'Total assets – e-o-y book value',
    'type': 'Num'
  },
  'mrtgnotespay': {
    'desc': 'Mortgage loans payable – e-o-y book value',
    'type': 'Num'
  },
  'othrliabltseoy': {
    'desc': 'Other liabilities – e-o-y book value',
    'type': 'Num'
  },
  'totliabend': {
    'desc': 'Total liabilities – e-o-y book value',
    'type': 'Num'
  },
  'tfundnworth': {
    'desc': 'Total fund net worth – e-o-y book value',
    'type': 'Num'
  },
  'fairmrktvaleoy': {
    'desc': 'Total assets – e-o-y fair market value ',
    'type': 'Num'
  },
  'totexcapgnls': {
    'desc': 'Capital gain net income',
    'type': 'Num'
  },
  'totexcapgn': {
    'desc': 'Net gain – sales of assets',
    'type': 'Num'
  },
  'totexcapls': {
    'desc': 'Net loss – sales of assets',
    'type': 'Num'
  },
  'invstexcisetx': {
    'desc': 'Excise tax on net investment income',
    'type': 'Num'
  },
  'sec4940notxcd': {
    'desc': 'Section 4940 – no tax',
    'type': 'Num'
  },
  'sec4940redtxcd': {
    'desc': 'Section 4940 – 1 % tax',
    'type': 'Num'
  },
  'sect511tx': {
    'desc': 'Section 511 tax',
    'type': 'Num'
  },
  'subtitleatx': {
    'desc': 'Subtitle A tax',
    'type': 'Num'
  },
  'totaxpyr': {
    'desc': 'Total excise tax',
    'type': 'Num'
  },
  'esttaxcr': {
    'desc': 'Estimated tax credit',
    'type': 'Num'
  },
  'txwithldsrc': {
    'desc': 'Tax withheld at source',
    'type': 'Num'
  },
  'txpaidf2758': {
    'desc': 'Tax paid with Form 2758 (filing extension)',
    'type': 'Num'
  },
  'erronbkupwthld': {
    'desc': 'Erroneous backup withholding credit amount',
    'type': 'Num'
  },
  'estpnlty': {
    'desc': 'Estimated tax penalty',
    'type': 'Num'
  },
  'taxdue': {
    'desc': 'Tax due ',
    'type': 'Num'
  },
  'overpay': {
    'desc': 'Overpayment',
    'type': 'Num'
  },
  'crelamt': {
    'desc': 'Credit elect amount',
    'type': 'Num'
  },
  'infleg': {
    'desc': 'Influence legislation?',
    'type': 'Char'
  },
  'actnotpr': {
    'desc': 'Activities not previously reported?',
    'type': 'Char'
  },
  'chgnprvrptcd': {
    'desc': 'Changes not previously reported?',
    'type': 'Char'
  },
  'contractncd': {
    'desc': 'Contraction?',
    'type': 'Char'
  },
  'furnishcpycd': {
    'desc': 'Furnished copy to Attorney General?',
    'type': 'Char'
  },
  'claimstatcd': {
    'desc': 'Claiming status?',
    'type': 'Char'
  },
  'cntrbtrstxyrcd': {
    'desc': 'Substantial contributors?',
    'type': 'Char'
  },
  'distribdafcd': {
    'desc': 'Distribution to donor advised fund with advisory privileges?',
    'type': 'Char'
  },
  'orgcmplypubcd': {
    'desc': 'Comply with public inspection?',
    'type': 'Char'
  },
  'filedlf1041ind': {
    'desc': 'Section 4947(a)(1) filing in lieu of Form 1041?',
    'type': 'Char'
  },
  'propexchcd': {
    'desc': 'Property exchange?',
    'type': 'Char'
  },
  'brwlndmnycd': {
    'desc': 'Borrow lend money?',
    'type': 'Char'
  },
  'furngoodscd': {
    'desc': 'Furnished goods?',
    'type': 'Char'
  },
  'paidcmpncd': {
    'desc': 'Paid compensation?',
    'type': 'Char'
  },
  'transfercd': {
    'desc': 'Transfer?',
    'type': 'Char'
  },
  'agremkpaycd': {
    'desc': 'Agree to make pay?',
    'type': 'Char'
  },
  'exceptactsind': {
    'desc': 'Acts fail to qualify under section 53.4941(d)-3?',
    'type': 'Char'
  },
  'prioractvcd': {
    'desc': 'Engage in acts in prior year?',
    'type': 'Char'
  },
  'undistrinccd': {
    'desc': 'Undistributed income?',
    'type': 'Char'
  },
  'applyprovind': {
    'desc': 'Not applying section 4942(a)(2) provisions?',
    'type': 'Char'
  },
  'dirindirintcd': {
    'desc': 'Direct indirect interest?',
    'type': 'Char'
  },
  'excesshldcd': {
    'desc': 'Excess business holdings?',
    'type': 'Char'
  },
  'invstjexmptcd': {
    'desc': 'Jeopardizing investments?',
    'type': 'Char'
  },
  'prevjexmptcd': {
    'desc': 'Prior year jeopardizing investments?',
    'type': 'Char'
  },
  'propgndacd': {
    'desc': 'Propaganda?',
    'type': 'Char'
  },
  'ipubelectcd': {
    'desc': 'Influence public election?',
    'type': 'Char'
  },
  'grntindivcd': {
    'desc': 'Grant individual?',
    'type': 'Char'
  },
  'nchrtygrntcd': {
    'desc': 'Non-charity grant?',
    'type': 'Char'
  },
  'nreligiouscd': {
    'desc': 'Non-religious?',
    'type': 'Char'
  },
  'excptransind': {
    'desc': 'Transactions fail to qualify under section 53.4945?',
    'type': 'Char'
  },
  'rfprsnlbnftind': {
    'desc': 'Receive funds to pay premiums on personal benefit contract?',
    'type': 'Char'
  },
  'pyprsnlbnftind': {
    'desc': 'Pay premiums on personal benefit contract?',
    'type': 'Char'
  },
  'tfairmrktunuse': {
    'desc': 'Fair market value of assets not used for charitable purposes ',
    'type': 'Num'
  },
  'valncharitassets': {
    'desc': 'Net value of noncharitable-use assets',
    'type': 'Num'
  },
  'cmpmininvstret': {
    'desc': 'Minimum investment return',
    'type': 'Num'
  },
  'distribamt': {
    'desc': 'Distributable amount',
    'type': 'Num'
  },
  'undistribincyr': {
    'desc': 'Undistributed income',
    'type': 'Num'
  },
  'adjnetinccola': {
    'desc': 'Adjusted net income column a',
    'type': 'Num'
  },
  'adjnetinccolb': {
    'desc': 'Adjusted net income column b',
    'type': 'Num'
  },
  'adjnetinccolc': {
    'desc': 'Adjusted net income column c',
    'type': 'Num'
  },
  'adjnetinccold': {
    'desc': 'Adjusted net income column d',
    'type': 'Num'
  },
  'adjnetinctot': {
    'desc': 'Adjusted net income total',
    'type': 'Num'
  },
  'qlfydistriba': {
    'desc': 'Qualifying distributions column a',
    'type': 'Num'
  },
  'qlfydistribb': {
    'desc': 'Qualifying distributions column b',
    'type': 'Num'
  },
  'qlfydistribc': {
    'desc': 'Qualifying distributions column c',
    'type': 'Num'
  },
  'qlfydistribd': {
    'desc': 'Qualifying distributions column d',
    'type': 'Num'
  },
  'qlfydistribtot': {
    'desc': 'Qualifying distributions total',
    'type': 'Num'
  },
  'valassetscola': {
    'desc': 'Value assets column a',
    'type': 'Num'
  },
  'valassetscolb': {
    'desc': 'Value assets column b',
    'type': 'Num'
  },
  'valassetscolc': {
    'desc': 'Value assets column c',
    'type': 'Num'
  },
  'valassetscold': {
    'desc': 'Value assets column d',
    'type': 'Num'
  },
  'valassetstot': {
    'desc': 'Value assets total',
    'type': 'Num'
  },
  'qlfyasseta': {
    'desc': 'Qualifying assets column a',
    'type': 'Num'
  },
  'qlfyassetb': {
    'desc': 'Qualifying assets column b',
    'type': 'Num'
  },
  'qlfyassetc': {
    'desc': 'Qualifying assets column c',
    'type': 'Num'
  },
  'qlfyassetd': {
    'desc': 'Qualifying assets column d',
    'type': 'Num'
  },
  'qlfyassettot': {
    'desc': 'Qualifying assets total',
    'type': 'Num'
  },
  'endwmntscola': {
    'desc': 'Endowments column a',
    'type': 'Num'
  },
  'endwmntscolb': {
    'desc': 'Endowments column b',
    'type': 'Num'
  },
  'endwmntscolc': {
    'desc': 'Endowments column c',
    'type': 'Num'
  },
  'endwmntscold': {
    'desc': 'Endowments column d',
    'type': 'Num'
  },
  'endwmntstot': {
    'desc': 'Endowments total',
    'type': 'Num'
  },
  'totsuprtcola': {
    'desc': 'Total support column a',
    'type': 'Num'
  },
  'totsuprtcolb': {
    'desc': 'Total support column b',
    'type': 'Num'
  },
  'totsuprtcolc': {
    'desc': 'Total support column c',
    'type': 'Num'
  },
  'totsuprtcold': {
    'desc': 'Total support column d',
    'type': 'Num'
  },
  'totsuprttot': {
    'desc': 'Total support total',
    'type': 'Num'
  },
  'pubsuprtcola': {
    'desc': 'Public support column a',
    'type': 'Num'
  },
  'pubsuprtcolb': {
    'desc': 'Public support column b',
    'type': 'Num'
  },
  'pubsuprtcolc': {
    'desc': 'Public support column c',
    'type': 'Num'
  },
  'pubsuprtcold': {
    'desc': 'Public support column d',
    'type': 'Num'
  },
  'pubsuprttot': {
    'desc': 'Public support total',
    'type': 'Num'
  },
  'grsinvstinca': {
    'desc': 'Gross investment income column a',
    'type': 'Num'
  },
  'grsinvstincb': {
    'desc': 'Gross investment income column b',
    'type': 'Num'
  },
  'grsinvstincc': {
    'desc': 'Gross investment income column c',
    'type': 'Num'
  },
  'grsinvstincd': {
    'desc': 'Gross investment income column d',
    'type': 'Num'
  },
  'grsinvstinctot': {
    'desc': 'Gross investment income total',
    'type': 'Num'
  },
  'grntapprvfut': {
    'desc': 'Grants approved for future payment',
    'type': 'Num'
  },
  'progsrvcacold': {
    'desc': 'Program service revenue line 1a (excluded)',
    'type': 'Num'
  },
  'progsrvcacole': {
    'desc': 'Program service revenue line 1a (exempt)',
    'type': 'Num'
  },
  'progsrvcbcold': {
    'desc': 'Program service revenue line 1b (excluded)',
    'type': 'Num'
  },
  'progsrvcbcole': {
    'desc': 'Program service revenue line 1b (exempt)',
    'type': 'Num'
  },
  'progsrvcccold': {
    'desc': 'Program service revenue line 1c (excluded)',
    'type': 'Num'
  },
  'progsrvcccole': {
    'desc': 'Program service revenue line 1c (exempt)',
    'type': 'Num'
  },
  'progsrvcdcold': {
    'desc': 'Program service revenue line 1d (excluded)',
    'type': 'Num'
  },
  'progsrvcdcole': {
    'desc': 'Program service revenue line 1d (exempt)',
    'type': 'Num'
  },
  'progsrvcecold': {
    'desc': 'Program service revenue line 1e (excluded)',
    'type': 'Num'
  },
  'progsrvcecole': {
    'desc': 'Program service revenue line 1e (exempt)',
    'type': 'Num'
  },
  'progsrvcfcold': {
    'desc': 'Program service revenue line 1f (excluded)',
    'type': 'Num'
  },
  'progsrvcfcole': {
    'desc': 'Program service revenue line 1f (exempt)',
    'type': 'Num'
  },
  'progsrvcgcold': {
    'desc': 'Program service revenue--fees and contracts from government line 1g (excluded)',
    'type': 'Num'
  },
  'progsrvcgcole': {
    'desc': 'Program service revenue--fees and contracts from government line 1g (exempt)',
    'type': 'Num'
  },
  'membershpduesd': {
    'desc': 'Membership dues and assessments (excluded)',
    'type': 'Num'
  },
  'membershpduese': {
    'desc': 'Membership dues and assessments (exempt)',
    'type': 'Num'
  },
  'intonsvngsd': {
    'desc': 'Interest on savings and temporary cash investments (excluded)',
    'type': 'Num'
  },
  'intonsvngse': {
    'desc': 'Interest on savings and temporary cash investments (exempt)',
    'type': 'Num'
  },
  'dvdndsintd': {
    'desc': 'Dividends and interest from securities (excluded)',
    'type': 'Num'
  },
  'dvdndsinte': {
    'desc': 'Dividends and interest from securities (exempt)',
    'type': 'Num'
  },
  'trnsfrcashcd': {
    'desc': 'Transfer cash to noncharitable exempt organization?',
    'type': 'Char'
  },
  'trnsothasstscd': {
    'desc': 'Transfer other assets to noncharitable exempt organization?',
    'type': 'Char'
  },
  'salesasstscd': {
    'desc': 'Sale of assets to noncharitable exempt organization?',
    'type': 'Char'
  },
  'prchsasstscd': {
    'desc': 'Purchase of assets from noncharitable exempt organization?',
    'type': 'Char'
  },
  'rentlsfacltscd': {
    'desc': 'Rental of facilities or other assets?',
    'type': 'Char'
  },
  'reimbrsmntscd': {
    'desc': 'Reimbursements arrangements?',
    'type': 'Char'
  },
  'loansguarcd': {
    'desc': 'Loans or other guarantees?',
    'type': 'Char'
  },
  'perfservicescd': {
    'desc': 'Performance of services or membership or fundraising solicitations?',
    'type': 'Char'
  },
  'sharngasstscd': {
    'desc': 'Sharing of facilities, equipment, mailing lists, other assets, or paid employees?',
    'type': 'Char'
  }
}
