var title = "";
var user = "";
var icp = "";
var pins = [
    {
        txt: "adguard\nhome",
        url: "http://192.168.49.1:3001",
        svg: `<svg t="1643980294368" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7065" width="200" height="200"><path d="M881.2318 126.665233q-13.165408 0.443135-25.873386 0.428841c-222.325288 0-320.201019-101.892539-321.08729-102.764514L512.028589 0l-22.242535 24.30097c-0.972039 1.057807-104.351225 110.598004-347.017854 102.335674L111.605779 125.593132V587.511691c0 120.933063 40.382495 297.329518 389.530258 432.285671l10.863963 4.202638 10.863963-4.202638C872.0832 884.841209 912.394221 708.444755 912.394221 587.511691V125.593132z m-580.192811 341.071265l123.920654 91.486005s171.121714-177.068305 336.325427-259.663014L784.885601 326.133315S578.398827 497.255029 472.189293 724.454806" fill="#4DDB78" p-id="7066"></path></svg>`
    }, {
        txt: "青龙",
        url: "http://192.168.49.1:5600",
        svg: `<svg t="1643980159518" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2261" width="200" height="200"><path d="M256 247.616v528.768a64 64 0 0 0 99.52 53.312l396.608-264.448a64 64 0 0 0 0-106.496L355.52 194.304A64 64 0 0 0 256 247.68z" fill="#3E74CA" p-id="2262"></path></svg>`
    }, {
        txt: "github",
        url: "https://github.com/lq-259",
        purl: "",
        svg: `<svg t="1643967324199" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6116" width="200" height="200"><path d="M465.981 1001.74a89.578 89.578 0 0 1-89.889-88.955l-0.356-63.666c-176.662 38.422-213.927-74.93-213.927-74.93-28.895-73.372-70.523-92.873-70.523-92.873-57.61-39.446 4.364-38.645 4.364-38.645 63.71 4.452 97.28 65.447 97.28 65.447 56.631 97.058 148.569 69.009 184.765 52.803 5.699-41.049 22.172-69.053 40.337-84.947-141.045-16.028-289.303-70.523-289.303-313.79 0-69.32 24.799-125.952 65.447-170.429-6.589-16.028-28.316-80.584 6.144-168.025 0 0 53.337-17.052 174.659 65.09a609.28 609.28 0 0 1 158.943-21.37c53.915 0.223 108.276 7.257 159.031 21.37C814.186 6.679 867.434 23.73 867.434 23.73c34.549 87.485 12.822 152.042 6.233 168.025 40.693 44.433 65.358 101.109 65.358 170.43 0 243.89-148.57 297.583-289.926 313.299 22.751 19.723 43.053 58.323 43.053 117.582 0 84.992-0.312 119.674-0.312 119.674a89.622 89.622 0 0 1-89.8 89H465.98z" fill="#46B980" p-id="6117"></path></svg>`
    },
    {
        txt: "切换内外网",
        url: "#private",
        purl: "#",
        svg: `<svg t="1643967279267" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4403" width="200" height="200"><path d="M513.787216 517.867655m-480.192409 0a480.192409 480.192409 0 1 0 960.384818 0 480.192409 480.192409 0 1 0-960.384818 0Z" fill="#B8D9FF" p-id="4404"></path><path d="M164.314594 513.985571c0-247.692379 174.248521-451.540277 397.996656-477.366867-17.018023-1.825673-34.287024-2.825542-51.774622-2.825542C245.320219 33.79721 30.332075 248.789402 30.332075 513.985571c0 265.192121 214.976 480.184313 480.200505 480.184313 17.487597 0 34.756599-0.987725 51.774622-2.813398-223.744087-25.830638-397.992608-229.674487-397.992608-477.370915z" fill="#FFFFFF" opacity=".21" p-id="4405"></path><path d="M513.787216 1014.252284c-273.709228 0-496.384628-222.679449-496.384628-496.384629S240.077988 21.483027 513.787216 21.483027c273.70518 0 496.384628 222.675401 496.384629 496.384628s-222.679449 496.384628-496.384629 496.384629z m0-960.384818c-255.84921 0-464.00019 208.146932-464.00019 464.000189s208.15098 464.00019 464.00019 464.00019 464.00019-208.15098 464.00019-464.00019-208.15098-464.00019-464.00019-464.000189z" fill="#6E6E96" p-id="4406"></path><path d="M519.215658 30.923091c-22.750068 0-45.083187 1.692087-66.987212 4.756464 233.459419 32.61113 413.184957 232.9777 413.184958 475.435945 0 242.462293-179.725539 442.832911-413.184958 475.431897a482.912702 482.912702 0 0 0 66.987212 4.760512c265.192121 0 480.184313-214.980048 480.184313-480.200505 0-265.188072-214.992192-480.184313-480.184313-480.184313z" fill="#6E6E96" opacity=".15" p-id="4407"></path><path d="M507.423674 46.742889s-101.990742 107.002234-101.990742 467.598911c-0.740794 140.694194 16.281277 384.156356 101.990742 469.865821 0 0-267.96099-60.473891-267.96099-469.857725 0-441.56587 267.96099-467.607007 267.96099-467.607007z" fill="#FFFFFF" opacity=".21" p-id="4408"></path><path d="M524.457889 1014.118698c-123.943343 0-221.03189-218.594961-221.031891-497.651669S400.514546 18.819407 524.457889 18.819407c123.931199 0 221.01165 218.594961 221.01165 497.647622S648.389088 1014.118698 524.457889 1014.118698z m0-962.914852c-102.257913 0-188.647452 213.065318-188.647452 465.263183 0 252.201913 86.389538 465.267231 188.647452 465.26723 102.245769 0 188.627211-213.065318 188.627211-465.26723 0-252.197864-86.381442-465.263183-188.627211-465.263183z" fill="#6E6E96" p-id="4409"></path><path d="M512.637569 700.102988c-130.128771 0-252.703871-18.119093-345.141204-51.013587-97.679563-34.764695-151.474164-83.114662-151.474164-136.152276s53.794601-101.387581 151.474164-136.148229c92.437332-32.894494 215.012433-51.013587 345.141204-51.013587 130.128771 0 252.703871 18.119093 345.141203 51.013587 97.683611 34.760647 151.478212 83.114662 151.478212 136.148229s-53.794601 101.387581-151.478212 136.152276c-92.437332 32.898542-215.012433 51.013587-345.141203 51.013587z m0-341.939192c-126.521954 0-245.243306 17.451164-334.284321 49.139338-82.584367 29.388878-129.950656 67.893976-129.950656 105.638039s47.36629 76.249161 129.950656 105.642087c89.041014 31.688173 207.758318 49.139338 334.284321 49.139338s245.243306-17.451164 334.28432-49.139338c82.584367-29.392926 129.950656-67.893976 129.950657-105.642087s-47.362242-76.249161-129.950657-105.638039c-89.041014-31.688173-207.758318-49.139338-334.28432-49.139338z" fill="#6E6E96" p-id="4410"></path></svg>`
    }
];
var apps = [
    {
        txt: "cloudreve",
        url: "https://cloud.yswl.cf",
        purl: "http://192.168.49.1:5212",
        svg: `<svg t="1643952838851" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2042" width="200" height="200"><path d="M832 469.333333C810.666667 302.933333 678.4 170.666667 512 170.666667 379.733333 170.666667 268.8 251.733333 221.866667 371.2c-128 4.266667-221.866667 110.933333-221.866667 238.933333C0 742.4 102.4 853.333333 230.4 853.333333h601.6c106.666667 0 192-85.333333 192-192S938.666667 469.333333 832 469.333333z m0 298.666667H230.4C153.6 768 85.333333 699.733333 85.333333 610.133333s68.266667-157.866667 145.066667-157.866666H256c29.866667 0 59.733333 17.066667 76.8 51.2 8.533333 21.333333 34.133333 29.866667 55.466667 21.333333 21.333333-8.533333 29.866667-34.133333 21.333333-55.466667-21.333333-46.933333-59.733333-76.8-98.133333-89.6C354.133333 302.933333 426.666667 256 512 256c128 0 234.666667 110.933333 234.666667 256 0 12.8-4.266667 46.933333-12.8 72.533333-8.533333 21.333333 4.266667 46.933333 25.6 55.466667s46.933333-4.266667 55.466666-25.6c4.266667-17.066667 8.533333-38.4 12.8-55.466667h4.266667c59.733333 0 106.666667 46.933333 106.666667 106.666667S891.733333 768 832 768z" fill="#75C82B" p-id="2043"></path></svg>`
    }, {
        txt: "alist",
        url: "https://alist.yswl.cf",
        purl: "http://192.168.49.1:5244",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281.57 377.88"><defs><style>.cls-1{fill:#f5ae78;}.cls-1,.cls-10,.cls-2,.cls-3,.cls-4,.cls-6,.cls-7,.cls-8,.cls-9{stroke:#231815;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;}.cls-2{fill:#db5c39;}.cls-3{fill:none;}.cls-4{fill:#ffcfae;}.cls-5{fill:#231815;}.cls-6{fill:#cb3617;}.cls-7{fill:#bf472c;}.cls-8{fill:#fff;}.cls-9{fill:#ff9920;}.cls-10{fill:#e15c3d;}</style></defs><title>鸡鸭 (2)</title><g id="图层_2" data-name="图层 2"><g id="物件"><g id="鸡鸭"><g id="箱子"><polygon class="cls-1" points="45.94 129.92 28.84 138.02 176.4 191.89 253.83 126.91 117.06 98.7 45.94 129.92"/><polygon class="cls-2" points="45.02 134.78 173.82 178.25 232.91 130.38 116.34 103.95 45.02 134.78"/><polygon class="cls-1" points="28.84 138.02 33.12 301.83 176.4 376.38 176.4 191.89 28.84 138.02"/><polygon class="cls-1" points="176.4 191.89 253.83 126.91 252.95 304.22 176.4 376.38 176.4 191.89"/><circle class="cls-2" cx="56.89" cy="256.76" r="9.82"/><circle class="cls-2" cx="97.74" cy="271.99" r="9.82"/><circle class="cls-2" cx="141.33" cy="286.86" r="9.82"/><path class="cls-3" d="M194.28,258.92l30.1-21.32s6.48-4.92,6.79,2S229,266.27,217,274.6s-23.33-.92-24.5-7.63C192,264.08,192,260.57,194.28,258.92Z"/><path class="cls-2" d="M224.38,237.6s.89,34.53-25.38,37.92c0,0-10.33-6.17-5.66-15.68C200.21,254.72,224.38,237.6,224.38,237.6Z"/><path class="cls-2" d="M176.4,191.89v8.71L204,226.5s5.93,5.55,11.17,0,64.94-63.82,64.94-63.82v-10.1l-26.24-25.67Z"/><path class="cls-1" d="M176.4,191.89l30.41,27.4s2.77,4.75,9.86-2,61.67-59.81,61.67-59.81,4.93-3.08-1.85-8.94-22.66-21.59-22.66-21.59Z"/><path class="cls-2" d="M2.16,169.93s-3.77,10.33,6.71,15.57,123.44,56.11,123.44,56.11,9.14,3.4,13.45-2,30.64-39,30.64-39v-8.71L28.83,138Z"/><path class="cls-1" d="M28.83,138,3,169.93s-4.31,2,6.48,8.32,123.32,55.34,123.32,55.34,5.86,5.24,13.26-3.39,30.33-38.31,30.33-38.31Z"/></g><g id="鸡1"><path class="cls-4" d="M45,134.78s12.26-75.27,47.4-75.09c16.65,0,27.52,41.56,28.21,64.45S105.37,154,105.37,154Z"/><circle class="cls-5" cx="78.32" cy="74.58" r="2.83"/><circle class="cls-5" cx="93.58" cy="75.57" r="2.83"/><path class="cls-6" d="M85.49,71.75s-17.35-16.1-2.95-12.58c-7.05-4.63-1.45-12,2.95-5.09,0-6.48,6.24-16,11.1,2.31C96.41,60.78,87.11,71.38,85.49,71.75Z"/><polygon class="cls-7" points="84.1 80.44 73.92 85.71 84.56 93.98 95.2 87.14 84.1 80.44"/><path class="cls-3" d="M55.43,120.91s-.93,7.63-3.24,9"/><path class="cls-3" d="M68.14,122.75s-3.23,8.33,0,11.1"/><path class="cls-3" d="M81.15,126.91s1.1,4.86-1,6.94"/><path class="cls-3" d="M90.75,125.41s-2.49,5.67-1.33,8.44"/><path class="cls-3" d="M97.74,126.91s1.39,6,3.24,6.94"/><path class="cls-3" d="M110.69,122.75a11.89,11.89,0,0,1,0,6.88"/><path class="cls-3" d="M60.28,125.41a4.11,4.11,0,0,0-.92,4.51"/></g><g id="鸭子"><path class="cls-8" d="M122.48,12s7.17-10.5,19.43-10.5,25.67,5.17,28.67,35.93-11,71.44-2.47,89.48-17.88,43-17.88,43l-44.86-16s-2.54-14.8,20.58-34.22,19.89-49,12-59.43S106.76,41.37,122.48,12Z"/><circle class="cls-5" cx="135.15" cy="17.25" r="2.83"/><path class="cls-9" d="M125.49,21s-2.5.69-6.37,1.59c-7.31,1.69-19.49,4.13-29,4.13-14.57,0-3.93,7.46,3.24,10s32.6,4.64,48.56-2.89C141.91,28,125.26,30.72,125.49,21Z"/></g><g id="鸡2"><path class="cls-10" d="M151.39,168.54s2.54-92.26,39.77-93c0,0,19.19-1.62,20.81,28.33s9.25,35.49,9.25,35.49l-47.4,38.85Z"/><path class="cls-6" d="M182.55,98.7c-4.05,0-9.42,1.57-9.42,4.52s5.78,5.19,9.48,5.2,10.34-1.5,10.34-4.86S186.6,98.71,182.55,98.7Z"/><path class="cls-3" d="M159.94,147.73s-2.77,7.55.31,12.33"/><path class="cls-3" d="M168.12,148.5s-.31,8.94,2.46,10.94"/><path class="cls-3" d="M179.37,147.73s2.77,6.78,0,9.71"/><path class="cls-3" d="M187.69,145.88s4.74,7.4,1,12.14"/><path class="cls-3" d="M197.87,145.88s-1.74,6.7,0,9.71"/><path class="cls-3" d="M204.69,145.88a6,6,0,0,0,.12,6"/><circle class="cls-5" cx="194.44" cy="92.42" r="3.28"/><circle class="cls-5" cx="176.4" cy="92.42" r="3.28"/><path class="cls-6" d="M183.07,87.73s-16-7.75-11.79-15.15,10.4,1.62,10.4,1.62-3.24-18.26,3-17.69,4.85,9.7,4.85,9.7,1.62-13.74,8.56-9.7,6,14.68,2.54,18.61S188.62,86.7,183.07,87.73Z"/></g></g></g></g></svg>`
    }, {
        txt: "jellyfin",
        url: "",
        purl: "http://192.168.49.1:8096",
        svg: `<svg t="1643955630667" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14078" width="200" height="200"><path d="M961.57 180.59c0-7.4-0.99-14.66-4.16-21.4-9.84-20.93-26.6-30.42-49.52-30.4-131.65 0.1-263.3 0.05-394.95 0.05H254.47c-45.99 0-91.99-0.08-137.98 0.03-31.15 0.07-52.35 21.46-52.35 52.52V844.8c0 30.26 21.71 52.04 51.88 52.04h793.89c29.57 0 51.63-21.84 51.63-51.34 0.05-221.64 0.04-443.27 0.03-664.91z m-160.78 76.58c22.13-0.47 44.28-0.47 66.41 0 17.58 0.38 31.1 15.42 30.64 32.91-0.45 17.07-14.69 30.78-32.2 30.91-10.49 0.07-20.97 0.01-31.46 0.01-10.65 0-21.31 0.06-31.96-0.01-17.64-0.11-31.89-14.08-32.21-31.48-0.31-17.01 13.44-31.98 30.78-32.34z m97.05 160.64c-0.33 17.46-14.73 31-33.03 31.02-10.32 0.01-20.64 0-30.97 0-10.32 0-20.64 0.01-30.97 0-18.23-0.03-32.49-13.62-32.86-31.28-0.36-17.34 13.77-32.03 31.87-32.32 21.3-0.35 42.62-0.3 63.93-0.02 18.4 0.26 32.37 14.76 32.03 32.6zM161 193.01c10.65-0.04 21.3-0.01 31.96-0.01 10.82 0 21.64-0.05 32.45 0.01 17.15 0.1 31.38 14.34 31.58 31.53 0.2 17.03-13.87 32.01-30.93 32.23-21.97 0.29-43.94 0.25-65.91 0.01-17.31-0.19-31.31-15.16-31-32.59 0.31-17.2 14.5-31.12 31.85-31.18zM256.96 354c-0.67 17.28-14.68 30.48-32.94 30.81-10.32 0.19-20.64 0.03-33.26 0.03-9.68-0.41-21.7 0.93-33.63-0.57-16.65-2.09-28.34-15.81-27.98-32.24 0.36-16.14 13.16-30.2 29.67-30.7 22.79-0.69 45.63-0.73 68.41 0.01 17.28 0.57 30.38 15.8 29.73 32.66z m-98.26 95.73c23.38-1.46 46.94-1.67 70.32 0.18 16.85 1.33 29.04 16.86 27.88 33.21-1.2 17.08-14.81 29.89-32 30.02-10.65 0.08-21.31 0.02-31.96 0.02-9.99 0-19.97 0.01-29.96 0-18.65-0.01-32.58-12.25-33.82-29.71-1.21-17.24 11.11-32.58 29.54-33.72z m66.01 318.68c-10.65 0.05-21.31 0.01-31.96 0.01-10.32 0-20.64 0.03-30.96-0.01-18.48-0.06-32.7-13.95-32.62-31.82 0.07-17.63 14.31-31.54 32.46-31.59 20.98-0.05 41.95-0.06 62.93 0 18.04 0.05 32.36 14.09 32.45 31.67 0.07 17.59-14.2 31.65-32.3 31.74z m32.27-158.06c-0.66 16.68-14.51 30.48-30.89 30.63-11.15 0.1-22.31 0.02-33.46 0.02-10.65 0-21.31 0.03-31.96-0.01-16.88-0.07-30.94-13.68-31.51-30.44-0.57-16.79 11.96-31.83 28.59-32.56 23.6-1.04 47.27-1.05 70.87 0.01 16.23 0.74 29.01 16.08 28.36 32.35z m128.42 91.67V326.43c108.65 62.73 216.65 125.08 325.27 187.8C601.94 577 493.93 639.36 385.4 702.02z m413.22-188.01c23.6-0.78 47.26-0.76 70.87 0.02 16.08 0.53 28.46 15.36 28.36 31.78-0.1 16.01-12.76 30.34-28.52 31.2-11.78 0.65-23.62 0.13-35.43 0.13v0.02c-11.65 0-23.32 0.51-34.93-0.12-16.08-0.87-28.86-15.17-28.95-31.4-0.11-16.24 12.45-31.1 28.6-31.63z m3.55 127.85c21.31-0.05 42.62-0.07 63.92 0 17.72 0.06 31.76 14.13 31.75 31.66-0.01 17.51-14.07 31.51-31.83 31.62-10.65 0.07-21.31 0.01-31.96 0.01s-21.31 0.05-31.96-0.01c-17.75-0.1-31.95-14.06-32.08-31.46-0.13-17.59 14.15-31.78 32.16-31.82z m95.66 161.02c-0.9 16.37-14.67 29.67-31.71 29.89-21.47 0.29-42.95 0.33-64.42-0.01-17.81-0.29-31.85-14.82-31.7-31.99 0.15-17.61 14.47-31.53 32.54-31.6 10.49-0.04 20.98-0.01 31.46-0.01v0.26c11.98 0 24.06-0.99 35.91 0.23 17.14 1.76 28.84 16.57 27.92 33.23z" fill="#00A7FE" p-id="14079"></path></svg>`
    }, {
        txt: "阅读",
        url: "https://reader.yswl.cf",
        purl: "http://192.168.49.1:3382",
        svg: `<svg t="1643966374843" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="38597" width="200" height="200"><path d="M942.7456 293.2736h-35.9424l3.1232 474.5728c0 15.0528-17.8176 22.0672-31.3856 15.4624-147.0464-71.6288-297.472-7.2704-348.2112 15.9744-8.448 3.8912-18.0736-2.2528-18.0736-11.5712v-1.3824c0 9.5232-10.1376 15.7696-18.5856 11.3152-141.4656-75.0592-280.6272-30.2592-341.8112-7.3216-26.1632 9.7792-47.7696-11.4176-47.7696-11.4176l-0.2048 83.1488c0 17.92 44.4928-0.6656 62.3616-2.0992l340.1216-27.3408c1.6384-0.1536 9.5744-0.1536 11.2128 0l422.1952 38.2976c17.8688 1.4336 33.6384-2.0992 33.6384-20.0192V323.9936c0.0512-16.9984-13.7216-30.72-30.6688-30.72z" fill="#BC9BE0" p-id="38598"></path><path d="M164.3008 252.8768v472.2688c0 13.7216 13.1584 22.9376 25.088 17.6128 52.992-23.9104 181.7088-67.2768 306.2784 2.7648 7.424 4.1472 16.3328-1.6384 16.3328-10.5472V264.3456c0-7.6288-4.2496-14.5408-10.8544-17.5616-41.5744-18.8416-189.8496-72.3968-327.424-10.8032-6.144 2.7648-9.4208 9.8816-9.4208 16.896zM558.3872 252.8768v472.2688c0 13.7216 13.2096 22.9376 25.1392 17.6128 53.0944-23.9104 182.0672-67.2768 306.8928 2.7648 7.424 4.1472 16.384-1.6384 16.384-10.5472V264.3456c0-7.6288-4.2496-14.5408-10.9056-17.5616-41.6256-18.8416-190.208-72.3968-328.0384-10.8032-6.144 2.7648-9.472 9.8816-9.472 16.896z" fill="#FFB47A" p-id="38599"></path><path d="M942.7456 262.5536h-20.5824V235.52c0-14.3872-8.4992-27.2896-21.6576-32.9216-50.8928-21.76-229.12-86.1696-385.2288 0.1024-1.4848 0.8192-2.9184 1.792-4.2496 2.7648-1.6896-1.0752-3.4304-2.048-5.2736-2.8672-50.8928-21.76-229.12-86.1696-385.2288 0.1024a36.0192 36.0192 0 0 0-18.6368 31.488v28.3648h-14.0288c-25.3952 0-46.08 20.6848-46.08 46.08v526.848c0 12.8 5.4272 25.1904 14.848 33.8944a46.2592 46.2592 0 0 0 34.9184 12.0832l419.2768-33.7408c0.8192-0.0512 1.6384-0.0512 2.4576 0l425.8816 33.792a46.1312 46.1312 0 0 0 34.9184-12.0832 46.19776 46.19776 0 0 0 14.7968-33.8432V308.6336c-0.0512-25.4464-20.736-46.08-46.1312-46.08zM527.36 234.1888c0-1.8944 1.0752-3.6352 2.7648-4.5568 53.8624-29.7472 110.8992-39.936 163.6864-39.936 88.2688 0 164.7616 28.416 194.56 41.216 1.8432 0.768 3.0208 2.6112 3.0208 4.6592v491.52c0 2.4576-1.536 3.7888-2.4064 4.352-0.6656 0.4096-1.8432 0.9728-3.2768 0.768a4.74624 4.74624 0 0 1-1.536-0.4608 361.344 361.344 0 0 0-66.2528-24.576c-124.16-32.8192-239.0528 6.8608-290.56 29.8496V234.1888z m-394.8032 0c0-1.8944 1.0752-3.6352 2.7648-4.5568 143.872-79.5136 310.6304-19.1488 358.2976 1.28 1.8432 0.768 3.0208 2.56 3.0208 4.608v499.7632c-4.1984-2.1504-8.3968-4.1984-12.5952-6.144-1.28-0.6144-2.6112-1.1776-3.8912-1.7408-2.9696-1.3312-5.9392-2.6624-8.9088-3.8912-1.4336-0.6144-2.8672-1.1776-4.3008-1.792-3.0208-1.2288-6.0928-2.4064-9.1136-3.5328-1.2288-0.4608-2.4064-0.9216-3.6352-1.3312-4.1984-1.536-8.3968-2.9696-12.5952-4.3008-0.4096-0.1536-0.8192-0.256-1.2288-0.3584-3.7888-1.1776-7.5776-2.304-11.3664-3.3792-1.3312-0.3584-2.6112-0.7168-3.8912-1.0752-2.9184-0.768-5.888-1.536-8.8064-2.2528-1.3824-0.3584-2.7648-0.6656-4.1472-0.9728-3.1232-0.7168-6.1952-1.3824-9.2672-1.9968-1.0752-0.2048-2.0992-0.4608-3.1744-0.6656-4.1472-0.8192-8.2432-1.536-12.3392-2.1504l-1.9968-0.3072c-3.4304-0.512-6.8608-1.024-10.2912-1.4336l-3.84-0.4608c-2.8672-0.3072-5.7344-0.6144-8.6016-0.8704-1.28-0.1024-2.56-0.256-3.84-0.3584-3.1744-0.256-6.2976-0.4608-9.4208-0.6656l-2.56-0.1536c-3.9936-0.2048-7.936-0.3584-11.8784-0.4608-0.768 0-1.536 0-2.304-0.0512-2.3552-0.0512-4.7104-0.1024-7.0656-0.1024-0.6144 0-1.1776 0.0512-1.792 0.0512-3.4816 0-6.8608 0.1024-10.2912 0.2048-1.2288 0.0512-2.4576 0.0512-3.6864 0.1024-4.5568 0.1536-9.0624 0.4096-13.5168 0.7168l-3.84 0.3072c-3.2256 0.256-6.4 0.512-9.5744 0.8192-1.6896 0.1536-3.328 0.3584-4.9664 0.512-2.7648 0.3072-5.5296 0.6144-8.2432 0.9728-1.6896 0.2048-3.3792 0.4608-5.0176 0.6656-2.7136 0.3584-5.4272 0.768-8.0896 1.1776-1.536 0.256-3.072 0.4608-4.5568 0.7168-3.1744 0.512-6.3488 1.0752-9.4208 1.6896-0.9216 0.1536-1.792 0.3072-2.7136 0.512-3.9424 0.768-7.8336 1.5872-11.6224 2.4064-1.2288 0.256-2.4064 0.5632-3.584 0.8192-2.6112 0.6144-5.2224 1.1776-7.8336 1.8432-1.4336 0.3584-2.7648 0.7168-4.1984 1.024-2.304 0.5632-4.608 1.1776-6.8608 1.792-1.3824 0.3584-2.7136 0.7168-4.0448 1.0752-2.304 0.6144-4.5568 1.28-6.7584 1.9456-1.1776 0.3584-2.3552 0.6656-3.4816 1.024-2.816 0.8704-5.5808 1.6896-8.2944 2.56-0.4608 0.1536-0.9216 0.256-1.3312 0.4096-3.1232 1.024-6.144 1.9968-9.0624 3.0208-0.9728 0.3072-1.8432 0.6656-2.816 0.9728-1.9968 0.6656-3.9424 1.3824-5.8368 2.048-1.024 0.3584-2.048 0.768-3.072 1.1264-1.7408 0.6144-3.4304 1.28-5.0688 1.8944-0.9728 0.3584-1.8944 0.7168-2.816 1.0752-1.6896 0.6656-3.328 1.3312-4.9152 1.9456-0.7168 0.3072-1.4848 0.6144-2.2016 0.8704-2.2528 0.9216-4.4032 1.792-6.4512 2.6624-2.2016 0.9216-3.9424 0.1536-4.8128-0.4096a5.00224 5.00224 0 0 1-2.304-4.3008V234.1888z m825.5488 601.344c0 4.352-1.7408 8.3456-4.9152 11.264-3.1744 2.9696-7.3728 4.352-11.6224 4.0448l-425.8304-33.792a44.36992 44.36992 0 0 0-7.3728 0l-419.2768 33.7408c-4.2496 0.3584-8.448-1.0752-11.6224-4.0448-3.1744-2.9184-4.9664-6.9632-4.9664-11.3152V308.6336c0-8.448 6.912-15.36 15.36-15.36h14.0288v435.9168a35.6864 35.6864 0 0 0 16.0768 29.9008 35.75296 35.75296 0 0 0 33.792 3.072c55.0912-23.4496 197.888-70.0928 334.5408 2.4064 1.024 0.512 2.048 0.9728 3.072 1.3824 0.3072 0.1024 0.6656 0.2048 0.9728 0.3072 0.7168 0.256 1.4336 0.512 2.2016 0.6656 0.4096 0.1024 0.768 0.1536 1.1776 0.256 0.6656 0.1536 1.3312 0.3072 2.048 0.3584 0.4096 0.0512 0.8704 0.1024 1.28 0.1024 0.6656 0.0512 1.28 0.1024 1.9456 0.1024h0.4096c0.256 0 0.512-0.0512 0.8192-0.0512 0.768 0 1.536-0.0512 2.304-0.1536l1.28-0.1536c0.768-0.1024 1.4848-0.256 2.2528-0.4608l1.2288-0.3072c0.8192-0.256 1.5872-0.512 2.3552-0.8192 0.3072-0.1536 0.6656-0.256 0.9728-0.3584 0.0512-0.0512 0.1536-0.0512 0.2048-0.1024 0.512 0.3072 1.0752 0.5632 1.6384 0.8192 0.3584 0.2048 0.7168 0.3584 1.0752 0.5632 1.1264 0.512 2.304 0.9728 3.4816 1.28h0.0512a21.26336 21.26336 0 0 0 4.7104 0.8704c0.8704 0.1024 1.6896 0.1536 2.56 0.2048 0.2048 0 0.3584 0.0512 0.5632 0.0512 0.3584 0 0.7168-0.0512 1.0752-0.0512 0.4608 0 0.9216-0.0512 1.3824-0.0512 0.6144-0.0512 1.2288-0.1536 1.8432-0.256 0.4096-0.0512 0.8704-0.1024 1.28-0.2048 0.6656-0.1536 1.3312-0.3072 1.9968-0.512l1.0752-0.3072c1.024-0.3584 2.048-0.7168 3.0208-1.1776 54.1184-24.7808 195.072-75.0592 334.2848-7.2704 1.3824 0.6656 2.816 1.28 4.2496 1.7408 0.768 0.256 1.5872 0.4608 2.4064 0.6656 0.6656 0.1536 1.28 0.4096 1.9456 0.512 0.8192 0.1536 1.6896 0.256 2.5088 0.3584 0.6144 0.1024 1.28 0.2048 1.8944 0.256 1.3312 0.1024 2.6112 0.1024 3.9424 0.0512h0.512c1.28-0.0512 2.56-0.256 3.84-0.4608 0.2048-0.0512 0.4096-0.0512 0.5632-0.0512 4.4032-0.8192 8.704-2.4576 12.6464-4.9152a35.6864 35.6864 0 0 0 16.8448-30.4128V293.2736h20.5824c8.448 0 15.36 6.912 15.36 15.36v526.8992z" fill="#333333" p-id="38600"></path></svg>`
    }, {
        txt: "bitwarden",
        url: "https://bit.yswl.cf",
        purl: "http://192.168.49.1:3011",
        svg: `<svg t="1643967031371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="42475" width="200" height="200"><path d="M525.274856 18.220566h-26.545339c-128.284929 0-232.271722 103.99894-232.271722 232.279819v365.006518c0 128.276831 103.990842 232.267673 232.271722 232.267673h26.545339c128.288978 0 232.275771-103.99894 232.275771-232.267673V250.500385c0-128.284929-103.986793-232.27982-232.275771-232.279819z m122.77827 544.746324c0 91.353867-57.613429 165.418442-128.69388 165.418442h-14.706021c-71.080451 0-128.69388-74.060526-128.69388-165.418442V303.03635c0-91.353867 57.613429-165.410344 128.69388-165.410344h14.706021c71.0845 0 128.69388 74.052428 128.69388 165.410344v259.93054z" fill="#FFFFFF" p-id="42476"></path><path d="M525.274856 865.999191h-26.545339c-138.124035 0-250.492287-112.368253-250.492288-250.488239V250.500385C248.237229 112.372302 360.609531 0 498.733566 0h26.545339c138.124035 0 250.496336 112.372302 250.496337 250.500385v365.006518c-0.004049 138.124035-112.376351 250.492287-250.500386 250.492288zM498.733566 36.441131c-118.028775 0-214.051156 96.02643-214.051156 214.059254v365.006518c0 118.024726 96.022381 214.047107 214.051156 214.047108h26.545339c118.028775 0 214.055205-96.022381 214.055205-214.047108V250.500385C739.330061 132.467561 643.307681 36.441131 525.274856 36.441131h-26.54129z m20.62568 710.160718h-14.706021c-81.008635 0-146.914445-82.381251-146.914445-183.639008V303.03635c0-101.253708 65.90581-183.63091 146.914445-183.63091h14.706021c81.008635 0 146.914445 82.377202 146.914445 183.63091v259.93054c0 101.257757-65.90581 183.634959-146.914445 183.634959zM504.653225 155.846571c-60.913375 0-110.473314 66.027281-110.473314 147.189779v259.93054c0 81.162497 49.559939 147.197876 110.473314 147.197876h14.706021c60.917424 0 110.473314-66.035379 110.473314-147.197876V303.03635c0-81.158448-49.55589-147.189778-110.473314-147.189779h-14.706021z" fill="#8C8C8C" p-id="42477"></path><path d="M205.070685 411.837421c-64.938096 0-117.765589 52.831542-117.76559 117.769638v358.366134c0 64.929998 52.831542 117.765589 117.76559 117.765589h613.863003c64.934047 0 117.765589-52.835591 117.765589-117.765589v-358.366134c0-64.938096-52.831542-117.769638-117.765589-117.769638H205.070685z" fill="#FF0000" p-id="42478"></path><path d="M818.937737 393.620904H205.066636c-18.342036 0-36.153651 3.603623-52.944915 10.705595a135.358558 135.358558 0 0 0-43.211084 29.124562 135.455734 135.455734 0 0 0-29.128611 43.215132A135.148009 135.148009 0 0 0 69.080481 529.607059v358.366134c0 18.337987 3.599574 36.153651 10.701545 52.940866 6.850933 16.196058 16.649548 30.740119 29.128611 43.211083a135.370705 135.370705 0 0 0 43.211084 29.128611 135.172303 135.172303 0 0 0 52.944915 10.705595h613.867052c18.337987 0 36.1577-3.603623 52.944915-10.705595 16.196058-6.846884 30.73607-16.649548 43.211084-29.128611a135.318067 135.318067 0 0 0 29.124562-43.211083 135.156107 135.156107 0 0 0 10.705594-52.940866v-358.366134c0-18.337987-3.603623-36.153651-10.705594-52.940866a135.374754 135.374754 0 0 0-29.124562-43.215132 135.358558 135.358558 0 0 0-43.211084-29.124562 135.139911 135.139911 0 0 0-52.940866-10.705595zM105.521612 529.607059c0-54.973471 44.567504-99.545024 99.545024-99.545024h613.867052c54.97752 0 99.545024 44.571553 99.545024 99.545024v358.366134c0 54.973471-44.567504 99.545024-99.545024 99.545024H205.066636C150.089116 987.514168 105.521612 942.946664 105.521612 887.969144v-358.362085z" fill="#8F0000" p-id="42479"></path><path d="M308.988644 987.514168h509.945044c54.97752 0 99.545024-44.571553 99.545024-99.545024v-358.366134a99.80821 99.80821 0 0 0-2.826212-23.573363c-56.176028 247.443379-299.724256 441.512649-606.663856 481.484521z" fill="#8F0000" opacity=".22" p-id="42480"></path></svg>`
    }, {
        txt: "supervisor",
        url: "https://super.yswl.cf",
        purl: "http://192.168.49.1:9001",
        svg: `<svg t="1643966670828" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40016" width="200" height="200"><path d="M886.57 447V237.4a53.34 53.34 0 0 0-14.94-37A52.33 52.33 0 0 0 834 184.1h-12.78a440 440 0 0 1-144.15-31.29 651.79 651.79 0 0 1-126.64-68l-13-9.17c-5.54-5-13.84-9.41-25.94-9.41a39 39 0 0 0-25.17 8.9l-13.45 9.81a651.41 651.41 0 0 1-126.45 67.89 440 440 0 0 1-144.65 31.31l-14.34 0.45c-27.91 0.34-50.51 23.49-50.51 51.88V565c0 46.87 13.66 95.83 40.6 145.52 23.22 42.82 56.31 85.55 95.72 123.58 37.09 35.79 78.4 66.28 119.47 88.17 43.57 23.22 84.8 35.49 119.25 35.49s75.68-12.27 119.25-35.49c41.07-21.89 82.38-52.38 119.47-88.17 39.41-38 72.5-80.76 95.72-123.58C873.38 660.86 887 611.9 887 565v-45.9zM629.85 750.64c-10.52 7.46-24.53-2.4-21-14.81 24.61-86.65-6.76-188.9-72.59-247.87a10.64 10.64 0 0 0-17.69 7.7c-0.75 33.59-11.82 85.15-42.68 120.23a104.57 104.57 0 0 0-1.47-47.63c-2.75-10.1-16.9-10.57-20.33-0.68a254.32 254.32 0 0 1-28.33 57.26c-22 30.75-37.94 63.9-24.41 114.13a13.62 13.62 0 0 1-20.8 14.83C299.83 699.09 279 646 293.29 574.72 303.4 527.05 334.5 487.52 348 443c3.08-10.13 17.43-9.95 20.42 0.21 5 16.87 6.09 32.74 7.21 52.77C425.5 434.46 476.92 354.42 474 278.8a10.63 10.63 0 0 1 15.6-9.76c30.9 16.28 95.28 63.11 125.93 180.38 16-13.73 21.06-36.94 19.35-58.93-0.78-10.13 11.93-15.37 18.63-7.73 58.58 66.83 160.39 237.4-23.66 367.88z" fill="#FFBD59" p-id="40017"></path></svg>`
    }, {
        txt: "v3面板",
        url: "",
        purl: "http://192.168.1.8:5678",
        svg: `<svg t="1644498897081" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4456" width="200" height="200"><path d="M510.464 112.64c-281.088 2.56-506.88 232.448-504.832 513.536 1.024 99.84 30.72 197.12 86.528 280.064h836.096c156.672-233.472 94.72-549.888-138.24-706.56-82.432-55.808-179.712-86.016-279.552-87.04z m0 78.336c39.936-0.512 72.704 32.256 73.216 72.192s-32.256 72.704-72.192 73.216c-39.936 0.512-72.704-32.256-73.216-72.192v-0.512c0-39.936 32.256-72.704 72.192-72.704z m-366.08 502.784c-39.936 0.512-72.704-32.256-73.216-72.192-0.512-39.936 32.256-72.704 72.192-73.216 39.936-0.512 72.704 32.256 73.216 72.192v0.512c0 39.936-32.256 72.704-72.192 72.704z m111.104-257.024c-39.936 0.512-72.704-31.744-73.216-72.192-0.512-39.936 31.744-72.704 72.192-73.216 39.936 0 72.704 32.256 73.216 72.192v0.512c0 39.936-32.256 72.704-72.192 72.704z m373.76-9.728l-58.368 218.624c47.616 33.28 59.392 98.816 26.112 146.432s-98.816 59.392-146.432 26.112-59.392-98.816-26.112-146.432c16.384-24.064 42.496-39.936 71.168-44.032l59.392-221.184c5.632-20.992 27.136-33.28 47.616-28.16 20.48 6.144 32.256 27.648 26.624 48.64z m64.512-62.976c0.512-39.936 32.768-72.192 72.704-71.68 39.936 0.512 72.192 32.768 71.68 72.704-0.512 39.424-32.256 71.68-72.192 71.68s-72.704-32.768-72.192-72.704z m182.784 329.728c-39.936 0.512-72.704-31.744-73.216-72.192-0.512-39.936 31.744-72.704 72.192-73.216 39.936-0.512 72.704 31.744 73.216 72.192v0.512c0 39.936-32.256 72.704-72.192 72.704z" fill="#12C88A" p-id="4457"></path></svg>`
    }, {
        txt: "relife",
        url: "",
        purl: "http://192.168.49.1:8080",
        svg: `<svg t="1644498973278" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6768" width="200" height="200"><path d="M512 0C229.239467 0 0 229.239467 0 512c0 282.760533 229.239467 512 512 512 282.760533 0 512-229.239467 512-512C1024 229.239467 794.760533 0 512 0z m0 786.005333c-141.380267 0-256-114.619733-256-256 0-141.380267 114.619733-256 256-256V200.874667l146.295467 109.704533L512 420.317867v-73.130667a182.869333 182.869333 0 1 0 182.869333 182.818133c0-43.434667 73.130667-44.970667 73.130667 0 0 141.380267-114.619733 256-256 256z" fill="#3498DA" p-id="6769"></path></svg>`
    }, {
        txt: "clash",
        url: "http://127.0.0.1:9090/ui",
        purl: "http://127.0.0.1:9090/ui",
        svg: `<svg t="1645186224345" class="icon" viewBox="0 0 1365 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1791" width="200" height="200"><path d="M1182.66855013 996.7404278c-89.55622287-1013.47629145-160.10976336-1042.9060845-160.10976489-1042.90608291-66.3632078 16.17664022-138.47594357 190.70895169-138.4759436 190.70895168-51.8432097-24.45986035-145.1025184-19.10013079-145.10251841-19.1001308s-93.2593087-5.35973113-145.10251997 19.1001308c0 0-72.11273579-174.53231146-138.47594201-190.70895168 0 0-68.0198515 28.45529619-155.33473223 989.79602792l-15.10469495-0.29234999h-29.33234306c-2.43624057-0.09744999-7.01637483-0.58469841-10.71946069-1.26684527-3.89798586-0.77959684-7.89342169-1.46174528-11.69395594-2.63114057-31.57368518-8.08832012-57.20294082-28.65019463-69.38414678-58.37233611-2.04644213-3.4107374-2.82603899-7.60107168-4.28778428-11.40160752-1.36429529-3.89798586-3.020939-7.60107168-3.70308586-11.59650755l-3.02093898-11.79140753c-0.58469841-3.89798586-0.77959684-7.7959717-1.26684529-11.69395753-1.26684528-15.68939181 0.19490001-31.76858362 5.94442799-45.80133173 5.65207956-14.0327481 15.00724496-26.99355091 27.96804778-37.61556159 6.43167642-5.26228114 13.35060124-10.32966225 20.85422292-14.61744653 3.80053586-2.04644213 7.60107168-4.19033428 11.59650754-5.94442956 3.80053586-1.8515437 8.38067011-3.60563743 11.2067091-4.67758269l2.63114058-1.07194529c9.16026695-3.60563743 14.81234653-13.35060124 12.86335281-23.38791506a20.77626387 20.77626387 0 0 0-24.45986036-16.37154025c-6.82147483 1.36429529-11.88885596 2.53369056-17.5409355 4.28778427-5.55462954 1.65664371-10.81691068 3.70308585-16.07919182 5.84697956-10.52456224 4.38523427-20.85422295 9.74496382-30.59918833 16.37154025-19.48992924 13.05825282-37.12831474 31.37878518-48.43247229 53.88965183-22.12106979 45.50898327-19.48992924 98.22923984 0.77959684 141.10708415 9.93986383 21.92616978 25.82415563 42.00079586 44.72938647 57.78763766 18.90523081 15.98174181 41.22119901 26.99355091 64.31676563 33.3277789 5.74952956 1.75409372 11.69395754 2.82603899 17.63838396 3.89798584 6.23677641 0.97449686 12.66845439 2.92348898 20.17207766 3.41073742 9.93986383 0.68214686 39.46710531 3.89798586 39.46710531 3.89798585 18.80778082 1.26684528 35.76401947 5.35973113 54.18200182 7.01637483 55.54629711 7.89342169 167.12613819 15.00724496 390.28582194 13.93529812 481.88848694 2.33879214 443.59077691-33.1328789 443.59077689-33.13287892zM540.76774828 447.70913777c-27.48079935 0-49.79676756-22.31596822-49.79676755-49.79676912s22.31596822-49.79676756 49.79676755-49.79676756c27.48079935 0 49.79676756 22.31596822 49.79676756 49.79676756S568.24854761 447.70913777 540.76774828 447.70913777z m267.30437174 116.64722223h-48.33502228a4.5801327 4.5801327 0 0 1-3.41073741-1.46174373l-17.3460371-17.34603708-17.34603708 17.34603708a4.96993113 4.96993113 0 0 1-3.41073744 1.46174373h-48.33502227v-9.74496384h46.28858015l18.41798238-18.41798237c0.87704685-1.65664371 2.63114055-2.33879214 4.48268427-2.33879213 1.55919372 0 3.11838898 0.58469841 4.09288428 1.94899373l18.8077808 18.80778077h46.2885817v9.74496384zM937.19289821 447.70913777c-27.48079935 0-49.79676756-22.31596822-49.79676757-49.79676912s22.31596822-49.79676756 49.79676757-49.79676756c27.48079935 0 49.79676756 22.31596822 49.79676754 49.79676756S964.67369754 447.70913777 937.19289821 447.70913777z" fill="#1296db" p-id="1792"></path><path d="M540.76774828 397.91236865m-49.79676755 0a49.79676756 49.79676756 0 1 0 99.59353511 0 49.79676756 49.79676756 0 1 0-99.59353511 0Z" fill="#FFFFFF" p-id="1793"></path><path d="M937.19289821 397.91236865m-49.79676757 0a49.79676756 49.79676756 0 1 0 99.59353511 0 49.79676756 49.79676756 0 1 0-99.59353511 0Z" fill="#FFFFFF" p-id="1794"></path><path d="M734.49763897 536.29086223l-18.41798238 18.41798391h-46.28858014v9.74496385h48.33502228c1.26684528 0 2.53369056-0.48724843 3.41073743-1.46174528l17.34603707-17.34603551v-11.69395753c-1.75409372-0.09744999-3.60563743 0.68214686-4.38523426 2.33879056z" fill="#FFFFFF" p-id="1795"></path><path d="M756.32636033 562.99206471c0.87704685 0.87704685 2.14389213 1.46174528 3.41073741 1.46174528h48.33502228v-9.74496385h-46.28858015l-18.80778078-18.80778233c-0.87704685-1.36429529-2.53369056-1.94899214-4.09288586-1.94899214v11.69395753l17.4434871 17.34603551z" fill="#FFFFFF" p-id="1796"></path></svg>`
    }, {
        txt: "x-ui",
        url: "",
        purl: "http://192.168.49.1:54321",
        svg: `<svg t="1645186557456" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6247" width="200" height="200"><path d="M860.28 163.72C788.28 89.35 663.96 67.3 512 65c-151.96 2.3-276.28 24.35-348.28 98.72C89.35 235.72 67.3 360.04 65 512c2.3 151.96 24.35 276.28 98.72 348.28 72 74.37 196.31 96.43 348.28 98.72 151.96-2.3 276.28-24.35 348.28-98.72 74.37-72 96.43-196.31 98.72-348.28-2.3-151.96-24.35-276.28-98.72-348.28zM278.81 815.64V311.37h-72.08v-72.11h168.5v244.2l244.2-244.2h200.19L278.81 815.64z" fill="#0e932e" p-id="6248"></path><path d="M375.22 483.46V239.27H206.73v72.1h72.08v504.27l540.8-576.37H619.42z" fill="#FFFFFF" p-id="6249"></path></svg>`
    }, {
        txt: "bgmi",
        url: "",
        purl: "http://192.168.49.1:3388",
        svg: `<svg t="1664513415496" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3166" width="200" height="200"><path d="M1001.984 278.528c0-102.912-83.456-186.368-186.368-185.856-59.904 0-115.712 28.672-151.04 77.312-48.64-20.48-100.352-30.72-153.088-30.72h-0.512c-52.224 0-103.936 10.752-152.064 30.72-22.016-30.72-52.736-53.76-87.552-66.56-96.768-34.816-203.264 15.36-238.08 112.128C1.024 304.64 40.96 403.456 125.44 445.44c-49.664 213.504 82.944 426.496 296.448 476.16 213.504 49.664 426.496-82.944 476.16-296.448 13.824-58.88 13.824-120.32 0-179.712 63.488-31.232 103.936-96.256 103.936-166.912z m-783.36 173.056L236.032 389.12l-60.928-22.016c-49.152-17.92-74.24-72.192-56.32-120.832s72.192-74.24 120.832-56.32c20.992 7.68 38.912 22.528 50.176 42.496l31.744 56.32 58.368-28.16c82.944-39.424 179.712-39.424 262.656 0l58.368 28.16 31.744-56.32c25.6-45.568 83.456-60.928 129.024-35.328 45.568 25.6 60.928 83.456 35.328 129.024-11.264 19.456-28.672 34.304-49.664 41.984L786.944 389.12l17.92 61.952c46.08 161.792-47.616 330.752-209.408 376.832s-330.752-47.616-376.832-209.408c-15.872-54.272-15.872-112.128 0-166.912z" fill="#3366FF" p-id="3167"></path><path d="M511.488 744.96c58.88 0 115.2-23.04 156.672-65.024 14.336-12.8 15.36-34.816 3.072-48.64s-34.816-15.36-48.64-3.072l-3.072 3.072c-59.392 59.392-156.16 59.392-215.552 0-13.312-13.312-34.816-13.312-48.64-0.512l-0.512 0.512c-13.312 13.312-13.312 35.328 0 49.152 41.472 40.96 97.792 64.512 156.672 64.512z" fill="#AEC9FF" p-id="3168"></path></svg>‘
        }
];
