var title = "";
var user = "";
var icp = "";
var pins = [
    {
        txt: "百度",
        url: "https://www.baidu.com",
        svg: `<svg t="1587511002072" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5603" width="128" height="128"><path d="M832.512 51.2H191.488A139.849 139.849 0 0 0 51.2 191.488v641.024A139.849 139.849 0 0 0 191.488 972.8h641.024A139.849 139.849 0 0 0 972.8 832.512V191.488A139.849 139.849 0 0 0 832.512 51.2zM538.624 257.024c5.12-44.032 58.368-112.64 100.352-102.4 41.984 9.216 80.896 65.536 72.704 113.664-7.168 48.128-46.08 112.64-105.472 104.448-59.392-7.168-72.704-61.44-67.584-115.712zM413.696 135.168c45.056 0 80.896 51.2 80.896 114.688 0 64.512-35.84 115.712-80.896 115.712S332.8 313.344 332.8 249.856c0-63.488 35.84-114.688 80.896-114.688zM161.792 407.552s9.216-94.208 74.752-100.352c52.224-5.12 90.112 52.224 94.208 84.992 2.048 20.48 13.312 117.76-67.584 135.168s-110.592-75.776-101.376-119.808zM778.24 816.128c-45.056 104.448-206.848 50.176-206.848 50.176S512 846.848 442.368 862.208s-129.024 9.216-129.024 9.216-80.896 2.048-104.448-100.352c-22.528-102.4 80.896-158.72 89.088-167.936 7.168-9.216 61.44-46.08 96.256-104.448s138.24-104.448 211.968 9.216C660.48 585.728 752.64 657.408 752.64 657.408s69.632 54.272 25.6 158.72zM764.928 578.56c-88.064 2.048-92.16-60.416-92.16-104.448 0-47.104 9.216-112.64 80.896-112.64 70.656 0 90.112 69.632 90.112 93.184 0 22.528 9.216 121.856-78.848 123.904z" p-id="5604" fill="#e6e6e6"></path><path d="M429.056 626.688h-56.32s-56.32 5.12-75.776 68.608c-7.168 41.984 6.144 67.584 8.192 72.704s20.48 35.84 65.536 45.056h106.496V559.104l-48.128-1.024v68.608z m-2.048 144.384h-41.984s-29.696-2.048-38.912-35.84c-4.096-14.336 1.024-31.744 3.072-38.912 2.048-7.168 12.288-22.528 32.768-28.672h45.056v103.424zM620.544 768h-50.176s-16.384-2.048-19.456-15.36V631.808l-49.152 1.024v134.144s2.048 32.768 49.152 45.056h121.856v-179.2h-52.224V768z" p-id="5605" fill="#e6e6e6"></path></svg>`
    }, {
        txt: "新浪",
        url: "",
        svg: `<svg t="1587648833605" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6582" width="128" height="128"><path d="M385.552 734.412c7.903-12.983 10.161-25.967 6.21-39.515-3.952-13.547-12.42-23.144-25.967-28.789-12.984-5.08-27.096-5.645-41.773-0.564-14.677 5.08-26.531 13.548-34.434 26.531-8.468 12.983-10.726 25.967-7.339 39.515 3.387 12.983 11.855 22.58 24.838 28.79 12.984 6.209 27.096 6.773 42.337 1.693 15.806-5.645 27.66-14.677 36.128-27.66z m53.628-69.433c2.822-5.08 3.951-10.16 2.258-15.241-1.694-5.08-5.08-8.468-10.161-10.726-5.08-1.693-10.726-1.693-16.37 0.565-5.646 2.258-9.597 5.645-12.42 10.725-6.21 11.855-3.951 20.322 7.339 25.967 5.08 1.694 10.725 1.694 16.37 0s10.726-6.21 12.984-11.29z m99.351 61.53c-16.935 38.95-47.417 67.74-90.32 85.804-42.901 18.629-85.803 20.887-128.14 6.774-40.644-12.983-68.87-37.257-84.11-72.256-15.242-35.563-14.113-71.126 3.95-107.254 18.065-35.564 46.854-62.095 86.369-79.595 40.08-17.5 80.159-21.45 120.238-10.725 42.338 11.29 72.256 33.87 90.32 68.304 18.628 34.435 19.193 70.562 1.693 108.948z m178.382-92.013c-3.387-36.692-20.322-69.433-50.805-97.658-30.483-28.225-69.998-49.111-119.11-62.66-49.11-12.983-101.044-16.934-156.93-11.29-84.674 9.033-155.237 35.564-211.122 81.288-55.885 45.16-81.288 95.965-75.643 151.85 3.387 36.693 20.322 69.434 50.805 97.659 30.483 28.225 69.998 49.111 119.11 62.659 49.11 13.548 101.044 17.5 156.93 11.854 84.674-9.032 155.237-35.563 211.122-81.287 55.885-45.725 81.288-96.53 75.643-152.415z m176.123 2.258c0 25.967-6.774 52.498-20.886 80.159-14.113 27.096-34.999 53.627-62.095 78.465-27.66 24.838-59.272 47.418-96.53 67.175-36.691 19.758-79.593 35.564-129.27 47.418-49.11 11.855-101.044 17.5-154.672 18.064-53.627 0-106.125-6.21-156.93-19.193-50.805-12.983-97.094-30.483-137.173-53.063-40.644-22.58-73.385-51.369-98.223-86.368C12.419 733.848 0 696.026 0 654.818c0-44.03 12.983-90.884 39.515-140.56 26.531-49.676 64.353-98.787 112.9-147.899 64.352-64.352 129.27-109.512 195.316-135.48 65.482-25.402 112.9-24.273 140.56 3.952 24.838 24.274 28.79 64.353 11.29 119.674-1.693 5.08-1.693 9.032-0.564 11.29 1.129 2.258 2.822 3.387 5.645 3.951 2.822 0.565 5.645 0.565 8.467-0.564 2.822-0.565 5.645-1.13 7.903-2.258l3.387-1.13c53.063-22.579 99.916-33.869 140.56-33.869 40.644 0 69.998 11.854 87.497 34.999 16.935 24.273 16.935 58.143 0 102.174-0.564 5.08-1.693 9.032-2.822 11.29-1.13 2.823 0 5.08 2.822 7.339 2.823 2.258 5.08 3.387 6.774 4.516 1.694 0.564 5.08 1.693 9.597 3.387 21.45 6.774 41.208 15.806 58.708 27.095 17.499 11.29 32.74 26.532 45.724 46.854 12.983 20.322 19.757 42.902 19.757 67.175zM850.7 279.427c15.806 18.064 26.531 38.95 31.047 62.094s3.387 45.725-3.951 67.176c-2.823 9.032-8.468 15.241-16.935 19.757-8.467 3.952-16.935 5.08-25.402 2.258-9.032-2.822-15.242-8.467-19.193-16.935-3.952-8.467-5.08-16.935-2.258-25.402 7.338-24.274 2.822-45.16-13.548-63.788-16.935-18.064-37.257-24.838-60.966-20.322-9.032 1.693-17.5 0.564-25.967-4.516-7.903-5.08-12.984-11.855-14.113-21.451-1.693-9.032-0.564-17.5 4.516-25.403 5.08-7.903 11.855-12.983 20.887-14.677 22.58-5.08 45.724-3.951 67.74 3.387 23.144 7.339 42.337 19.758 58.143 37.822z m103.303-93.707c33.306 36.692 54.757 79.03 64.353 127.577 9.596 48.546 7.338 94.27-7.903 138.302-3.387 10.16-10.16 18.064-19.193 23.144-9.596 5.08-19.193 5.645-29.918 2.258-10.161-3.387-18.064-10.16-22.58-19.757-5.08-9.597-5.645-19.193-2.823-29.919 10.726-31.047 12.42-64.353 5.645-98.787-6.774-34.434-22.015-64.353-45.724-90.32-23.71-26.531-51.934-44.595-84.675-54.756-32.74-10.161-65.482-11.855-98.787-5.08-10.726 2.257-20.322 0.564-29.919-5.646-9.031-5.644-14.676-14.112-16.934-24.837-2.258-10.726-0.565-20.322 5.645-29.354 5.645-9.032 14.112-14.677 24.837-16.935 46.854-10.161 93.143-7.903 139.432 6.774 45.724 14.677 85.239 40.08 118.544 77.336z m0 0" p-id="6583" fill="#e6e6e6"></path></svg>`,
    }, {
        txt: "什么值得买",
        url: "http://smzdm.com",
        purl: "http://192.168.1.101:5000",
        svg: `<svg t="1587648866807" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6939" width="128" height="128"><path d="M537.03 66.55c25.34-0.79 51.03-0.96 75.92 4.56 22.03 4.7 43.28 13.95 60.91 28.09 4.77 3.81 9.17 8.57 15.19 10.35 5.61 0.88 11.39 0.04 16.98 1.27 15.96 2.7 29.31 12.6 41.61 22.51 16.48 13.5 33.32 26.6 49.07 40.98 25.3 22.74 49.01 47.39 69.39 74.68 20.13 26.7 38.32 54.99 52.66 85.24 14.01 29.28 23.83 60.49 29.83 92.37 9.55 50.18 10.19 101.51 9.11 152.42-0.21 11.02-4.89 21.29-6.05 32.18-0.64 8.31-1.43 16.65-3.42 24.77-4.56 20.45-14.81 38.89-23.39 57.82-13.35 28.74-28.41 57.32-50.51 80.39-4.24-4.08-8.36-8.97-9.12-15.01-0.81-6.25 2.52-11.87 4.56-17.53 7.65-20.1 15.2-40.25 23.71-60.02 7.79-18.57 15.76-37.07 23.25-55.76 2.06-4.97 0.57-10.42 0.58-15.6-2.42-0.77-4.83-1.47-7.25-2.17-6.37 12.74-12.69 25.51-19.1 38.24-10.3-8.46-22.5-14.89-35.78-16.91-16.68-2.87-33.73 0.68-49.41 6.45-36.17 12.57-72.89 23.46-109.18 35.69-15.85 4.98-30.46 13.1-45.99 18.92-6.51 2.43-13.59 1.68-20.32 2.87-4.33 0.75-7.93 3.41-11.88 5.13-19.21 8.57-40.62 10.09-60.1 17.83-24.19 10.15-49.63 16.74-74.73 24.14-8.98 2.36-18.21 3.45-27.33 5.02-2.94-21.13-2.29-42.74-7.5-63.53-2.27-9.28-6.05-18.18-11.21-26.22 0.97-1.83 2.15-3.59 2.63-5.62 0.14-2.39-0.56-4.71-1.02-7.03-5.54-25.98-10.75-52.05-17.4-77.77-1.64-5.86-2.75-11.94-5.59-17.37-7.43-14.87-23.7-24.36-40.14-24.87-10.85-0.53-21.96 2.8-30.46 9.63-3.25 2.67-6.02 6.78-5.04 11.18 1.11 4.99 5.43 8.23 8.71 11.82 20.57 21.27 33.3 49.29 38.02 78.35 0.45 5.95 8.37 7.83 8.38 13.85 4.91 41.69 10.26 83.33 15.04 125.04-5.03 5.4-9.04 13.25-6.04 20.65 3.78 8.96 13.09 13.81 21.72 17.11 10.98 4.21 23.21 1.82 33.53-3.09 48.47-23.1 96.82-47.07 148.08-63.48 12.25-3.77 24.92-5.97 37.19-9.66 5.12-1.51 10.06-3.55 15.09-5.33 21.04-7.64 43.1-11.77 64.86-16.75 10.72-2.33 21.33-5.11 31.98-7.75 38.65-9.35 77.83-16.2 116.76-24.25 1.36-0.12 2.85-0.96 4.19-0.29 1.74 1.88 2.81 4.27 4.1 6.47-13.76 20.47-26.81 41.43-41.14 61.52-24.03 34.85-56.41 63.22-91.9 85.95-20.02 13.02-40.9 24.84-63.03 33.89-24.86 10.34-50.43 18.88-76.07 27.05a804.909 804.909 0 0 1-45.23 12.76c-6.86 1.59-13.66 3.53-20.68 4.3-15.63 1.88-31.4 0.81-47.09 1.23-8.03-0.4-16.3 0.03-23.94 2.75-4.97 1.89-7.28 7.15-7.63 12.15 8.35 3.5 17.48 5.19 26.53 4.78 29.07-0.72 58.08-2.59 87.12-3.95 3.03-0.11 6.11-0.57 8.82-2.01 38.38-20.33 82.14-28.75 119.08-52.04 7.42-4.38 13.73-10.44 21.48-14.3 13.59-7.01 28.63-10.48 42.51-16.81 23.27-10.36 42.84-28.64 54.75-51.16 2.62-5.04 5.78-10.22 10.88-13.07 4.16-2.08 9.18-2.33 13.63-1.08 5.23 1.52 6.58 7.76 6.93 12.5 0.44 7.43-5.13 13.25-10.3 17.79-39.4 32.67-78.09 66.26-119.26 96.71-17.88 13.16-40.99 15.13-60.07 25.93-26.94 15.08-57.6 21.15-87.62 26.8-1.98 0.26-3.97-0.14-5.93-0.32-14.66-1.89-29.34-3.57-44.02-5.32-6.95-0.86-13.98-1.09-20.97-0.64-7.76 0.43-15.11 3.73-22.94 3.48-12.05-0.23-23.69-4.08-34.68-8.79-10.24-4.6-20.09-10.22-28.76-17.39-5.46-4.5-9.55-10.52-15.59-14.35-8.47-5.51-17.92-9.25-27.05-13.5-4.68 3.01-8.39 7.19-12.58 10.8-3.58-5.41-7.9-10.41-13.35-13.99-9.72-6.47-21.48-8.57-32.85-9.92-3.72-0.36-6.08-3.66-8-6.5-3.06-4.5-3.77-10.35-7.66-14.3-3.03-3.02-7.54-3.21-11.54-3.25-5.53-0.04-9.97-3.91-13.88-7.38-10.27-10.19-17.58-22.96-27.98-33.05-14.4-14.54-31.84-26.26-43.57-43.3-9.68-15.16-20.59-29.47-30.73-44.3-10.94-16.29-20.76-33.78-25.12-53.08-1.74-6.65-2.02-13.56-3.33-20.29-2.97-12.62-9.16-24.13-13.74-36.19 6.76-3.77 12.4-9.66 14.92-17.07 4.98-14.11 2.87-29.51-0.62-43.7-7.35 13.52-14.2 27.32-21.7 40.75-0.21 0.08-0.64 0.23-0.85 0.31-3.77-8.59-8.71-16.68-11.71-25.59-2.05-5.64-0.71-11.63-0.5-17.43 1.21-33.24-16-64.59-11.99-97.96 3.2-18.81 0.93-38.08 4.3-56.86 1.3-6.88 3.4-13.67 6.73-19.85 1.36-2.54 2.59-5.27 2.56-8.22 0.21-6.86-1.02-13.66-1.1-20.52 8.17-4.81 15.13-11.43 21.05-18.79 11.47-14.47 19.57-31.17 29.31-46.78 6.8-10.87 16.45-19.47 25.53-28.38 11.73-10.71 21.44-23.93 35.63-31.68-0.04 26.71 1.45 53.43 0.33 80.14-1.38 34.61-8.57 68.76-18.86 101.76-10.93 35.42-25.18 69.67-38.84 104.1-3.1 7.36-5.31 15.14-5.99 23.12-1.56 16.88 1.85 33.69 6 49.97 12.41-16.91 26.24-32.74 38.07-50.08 12.14-17.65 22.03-37.18 26.51-58.24 2.58 5.02 5.58 9.85 7.68 15.11 14.73 39.69 23.53 81.29 30.13 123.02 3.42 21.25 6 42.63 9.2 63.91 2.86 17.03 7.47 33.73 9.83 50.85 1.89 13.39 0.64 26.95 1.7 40.39 0.99 12.5 4.35 24.69 8.57 36.46 2.07 6.42 8.84 9.15 13.42 13.48-0.29 2.9-0.74 5.98 0.57 8.73 2.18 5.28 7.47 8.27 12.44 10.47 6.69 2.86 13.01 6.65 18.37 11.6 4.24 4.47 12.49 3.69 16.08-1.25 3.93-4.92 3.48-11.54 4.59-17.4 1.64-10.42 3.94-21.87-1.28-31.67-1.77-4.03-5.53-6.64-7.79-10.29-0.95-4.65 0.06-9.41-0.3-14.1-0.89-13.41-0.36-27.02-3.47-40.18-7.89-33.81-17.11-67.29-26.32-100.75-0.89-3.74-3.91-6.3-6.46-8.93 0.47-8.11 3.02-16.36 0.77-24.41-7.77-32.9-16.24-65.63-24.36-98.45-1.55-7.8-0.54-15.82-1.55-23.68-1.33-14.46-7.19-28.86-18.13-38.69-3.97-4.06-9.71-6.26-12.8-11.18-2.69-4.15-1.93-9.38-0.69-13.88 9.64-33.23 17.52-66.93 27.19-100.14 5.22-16.94 12.69-33.08 17.94-50 3.27-11.05 5.03-23.54-0.08-34.32-4.95-9.82-14.52-16.23-24.28-20.64-10.28-4.93-21.51-7.19-32.34-10.5 36.2-32.93 79.16-59.1 126.39-72.61 23.66-6.43 46.52-15.58 70.43-21.1 47.86-10.2 98.42-10.05 145.46 4.17 23.68 6.79 47.7 12.5 70.83 21.07 14.73 5.55 29.05 12.23 42.6 20.24 13.3 7.91 25.7 17.8 34.8 30.43 2.48 3.46 4.94 7.13 8.65 9.4 3.54 2.13 7.29 3.9 10.75 6.18 13.29 8.36 24.24 19.81 34.32 31.73 24.53 29.52 47.42 60.63 65.57 94.54 18.25 33.72 31.09 70.28 39.08 107.75 4.92 23.97 7.32 48.49 6.49 72.96-0.29 13.36-2.39 26.58-3.28 39.9-0.82 11.37-1 22.77-0.95 34.16-0.12 6.63 5.5 11.21 8.56 16.57 1.57-0.46 3.15-0.91 4.74-1.35 2.27-5.27 5.32-10.41 5.67-16.27 3.07-29.25 7.71-58.47 7.21-87.97-0.46-20.2-4.64-40.04-7.31-60.01-1.65-11.35-1.76-22.91-4.44-34.1-5.78-26.6-18.8-50.73-30.25-75.19-3.73-7.62-6.76-15.6-11.09-22.92-9.23-15.94-21.54-29.75-32.79-44.25-10.39-13.61-20.34-27.57-30.79-41.14-11.55-15.01-23.12-30.24-37.55-42.64-14.79-13.68-32.01-24.27-49.07-34.82-30.9-18.85-65.83-29.97-101.1-37.27-10.76-1.84-18.09-10.88-28.01-14.71-25.71-11.68-54.59-9.23-82.03-11.3-17.43-0.93-34.6 3-51.93 4-4.61 0.06-8.02 3.54-12.11 5.12-13.83 6.03-29.32 5.3-43.62 9.56-29.9 8.72-58.69 20.73-87.53 32.37-20.94 8.14-41.17 17.93-61.32 27.84-5.18 2.59-9.76 6.2-14.77 9.08-5.02 2.91-10.72 4.21-16.16 6.08-0.98-1.57-1.95-3.14-2.93-4.71 2.3-2.52 4.41-5.21 6.61-7.82 3.74-4.54 9.4-6.63 14.25-9.7 32.27-19.07 63.39-41.26 99.54-52.52 38.59-12.01 77.61-23.74 117.93-28.08 24.34-2.26 48.72-4.3 73.15-5.35m-76.53 68.99c-5.44 2.63-9.06 8.39-9.2 14.41-0.38 8.76 3.47 16.9 7.08 24.66 6.32 13.49 13.13 26.83 17.81 41.01 3.51 10.16 4.69 20.9 6.77 31.4 0.77 5.51 2.37 11.24 0.82 16.75-1.86 4.58-7.11 6.04-11.31 7.67-36.11 12.28-72.45 23.91-108.29 36.97-7.1 2.2-11.17 8.77-16.22 13.71 5.32 3.1 10.28 7.1 16.35 8.66 14.53 4 29.9 3.54 44.64 1.04 12.69-2.27 25.26-5.41 37.57-9.21 5.34-1.45 4.84-8.68 9.7-10.74 8.22-2.6 15.65 8.31 23.63 2.92 3.01 5.12 7.75 9.86 7.6 16.21 0.57 17.52 0.68 35.13-1.13 52.58-1.58 6.01-5.22 13.42-12.24 13.95-11.9 1.88-23.99 1.46-35.96 2.38-5.94 0.42-12.21 1.5-17 5.27-3.98 2.89-5.64 8.16-4.98 12.91 0.59 5.93 3.69 11.14 6.6 16.19 6.38 11.23 12.11 22.92 15.8 35.34 17.42 62.09 31.83 124.98 49.19 187.09 5.44-1.19 10.86-2.56 16.37-3.45 0.51 1.72 1.04 3.45 1.58 5.18-5.81 3.01-11.81 5.62-17.73 8.39 6.47 10.18 11.41 21.55 19.97 30.25 4.57 4.84 12.18 7.32 18.43 4.35 4.79-2.19 7.03-7.4 8.07-12.25 1.72-7.36 5.96-14.14 12.12-18.57 8.74-6.2 19.49-8.16 29.46-11.51 5.89-1.89 11.3-4.98 17.18-6.9 14.78-4.94 30.46-6.56 45.16-11.83 6.4-2.37 12.79-4.99 19.55-6.14 7.76-1.45 16.07-0.25 22.76 4.07 5.89 3.3 9.51 9.6 15.9 12.14 5.74 2.46 12.38 4.73 18.58 2.81 7.17-4.5 10.71-12.72 13.83-20.25 1.9-5.19 4.92-10.26 4.58-15.97-0.28-5.38-1.36-10.66-2.21-15.95-4.07-24.83-7.56-49.81-13.91-74.18-5.96-23.67-12.85-47.09-18.36-70.87-7.07-30.43-11.71-61.87-8.73-93.14 1.4-7.92-4.58-15.5-11.36-18.83-15.95-5.01-32.17-10.14-49-10.71-15.7-0.55-30.94 4.06-45.67 8.95-16.99 5.14-32.04 14.74-47.78 22.67 0.04-17.34 0.81-34.7-0.27-52.02-0.2-4.35-0.44-9.06 1.94-12.93 2.27-3.81 6.41-5.87 10.38-7.48 41.35-16.87 82.31-34.69 123.61-51.68 5.35-2.19 11.23-4.03 15.16-8.53 4.92-5.54 4.7-14.83-0.45-20.14-3.78-3.83-8.25-6.89-12.39-10.29-0.92 1.2-1.83 2.41-2.73 3.63 1.64 4.03 3.22 8.08 4.78 12.15-3.46-0.26-8.48-0.54-9.47-4.66-1.52-4.67-3.61-9.45-7.7-12.43-6.44-5.05-15.37-4.68-22.91-2.82-18.7 4.96-36.08 13.69-53.26 22.41-5.57 2.59-7.09 9.03-10.21 13.78-2.83 4.15-6.39 8.16-11.12 10.13-8.67 1.37-17.32-1.25-25.91-2.2 1.98-19.35 2.72-38.92 7.11-57.94 0.81-4.3 2.01-8.94 0.39-13.18-2.2-4.95-8.06-6.02-12.73-7.32 3.88-2.47 7.69-5.05 11.49-7.66-4.46-6.53-10.61-11.98-17.99-14.95-13.93-5.85-29.47-4.26-43.85-8.3-6.7-1.93-13.81 0.02-19.89 3z" fill="#e6e6e6" p-id="6940"></path><path d="M196.72 189.81c1.66-3.74 5.12-6.97 9.29-7.45 6.06 0.84 11.4 4.35 15.85 8.39-1.59 4.37-3.76 8.61-7.05 11.96-13.45 13.96-27.16 27.67-40.94 41.31-0.6-1.37-0.74-2.83 0.07-4.13 7.56-16.71 14.84-33.55 22.78-50.08z m370.13 200.21c8.21-3.77 16.98-7.47 26.22-6.75 7.33 0.38 14.2 4.38 18.59 10.2 6.56 8.28 9.26 18.69 12.22 28.63 6.84 22.69 12.81 45.64 19.6 68.34 1.06 3.68 1.97 7.61 4.66 10.5 1.35 1.78 3.39 3.1 4.38 5.1 0.5 5.65 0.21 11.34 0.58 17.01 0.16 8.79 2.04 17.4 3.45 26.05 2.49 14.5 5.41 28.92 7.97 43.41-10.56 3.25-21.52 5.24-31.78 9.42-29.14 12.54-57.83 26.08-86.88 38.83-2.92 1.23-5.72 2.85-8.84 3.49-3.84-1.3-7.93-3.39-10.26-6.76-0.66-8.84-2.27-17.57-3.85-26.29-0.96-6.55-1.96-13.52 0.41-19.89 2-5.1 6.97-8.03 11.77-10.06 10-4.17 20.89-5.5 30.98-9.4 11.78-4.59 23.64-9.05 35.09-14.45 4.49-2.36 9.74-4.11 12.67-8.54 2.65-3.91 5.19-7.92 7.25-12.17-6.73-3.23-12.19-9.95-20.02-10.21-18.9 3.3-36.92 10.15-54.98 16.44-11.75 4.04-22.65 10.13-34.06 14.97-3.16-2.44-3.69-6.71-4.58-10.33-3.5-14.41-6.91-28.85-10.37-43.28 29.07-11.69 58.16-23.32 87.15-35.2 5.49-2.37 12.55-3.7 15.43-9.59 2.39-7.46-2.82-16.46-10.53-18.04-8.2-1.96-16.4 0.92-24.22 3.14-19.57 5.46-38.39 13.21-57.61 19.71-1.51 0.71-3.28 1.52-3.86 3.21-1.33 2.94 0.43 5.98 1.29 8.79-4.29 3.03-8.6 6.04-13.02 8.86-4.82-19.01-9.91-37.95-14.58-56.99 29.98-12.55 59.99-25.04 89.73-38.15zM80.99 399.9c1.67 0.3 3.41 0.37 5 1.01 1.32 1.15 2.36 2.57 3.47 3.91-1.55 7.02-3.83 13.85-6.02 20.7-2.09-0.78-4.18-1.55-6.28-2.31 0.66-7.86 2.49-15.55 3.83-23.31z m-11.72 68.21c2.45 0 4.9 0.03 7.35 0.08 2.34 13.9 6.07 27.61 6.73 41.75 0.99 19.82 1.54 40.03 7.66 59.09 2.47 8.2 6.31 15.87 10.37 23.37 7.36 15.83 6.98 33.68 9.63 50.6 1.9 12.42 5.59 24.51 7.02 37 0.92 5.4-3.42 9.58-5.67 14.05-3.4-3.03-8.02-5.6-8.9-10.46C100.93 672 94.3 662 89.91 651.12c-2.31-5.53-2.83-11.56-4.53-17.27-5.27-18.39-14.99-35.61-16.69-54.93-0.8-6.65 0.3-13.3 0.7-19.92 0.61-17.45-3.5-34.59-4.1-51.98-0.48-13.1 2.54-25.96 3.98-38.91z" fill="#e6e6e6" p-id="6941"></path></svg>`
    },
    {
        txt: "切换内外网",
        url: "#private",
        purl: "#",
        svg: `<svg t="1638330980530" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24684" width="200" height="200"><path d="M1004 436H456.8c-8.8 0-16-7.2-16-16V25.6c0-8.8 7.2-16 16-16h547.2c8.8 0 16 7.2 16 16v394.4c0 8.8-7.2 16-16 16z m-531.2-32h515.2V41.6H472.8v362.4z" p-id="24685" fill="#e6e6e6"></path><path d="M940 364H520.8c-4.8 0-8-3.2-8-8V89.6c0-4.8 3.2-8 8-8h419.2c4.8 0 8 3.2 8 8v266.4c0 4-3.2 8-8 8z m-411.2-16h403.2V97.6H528.8v250.4zM864 534.4H596.8c-4.8 0-9.6-2.4-12-5.6-3.2-4-4-8.8-3.2-12.8 12-64.8 74.4-112 149.6-112s137.6 47.2 149.6 112c0.8 4.8-0.8 9.6-3.2 12.8-4 3.2-8.8 5.6-13.6 5.6z m-245.6-32h224.8c-16.8-39.2-61.6-66.4-112.8-66.4-50.4 0-96 27.2-112 66.4zM509.6 874.4h-440c-8.8 0-16-7.2-16-16v-296c0-8.8 7.2-16 16-16h439.2c8.8 0 16 7.2 16 16v296c0.8 8.8-6.4 16-15.2 16z m-424-32h407.2v-264H85.6v264z" p-id="24686" fill="#e6e6e6"></path><path d="M559.2 1015.2H20c-8.8 0-16-7.2-16-16v-140c0-8.8 7.2-16 16-16h539.2c8.8 0 16 7.2 16 16v140c0 8.8-7.2 16-16 16z m-523.2-32h507.2v-108H36v108zM152.8 442.4H152c-8.8-0.8-15.2-8-15.2-16.8 0-2.4 20.8-248.8 272.8-235.2 8.8 0.8 15.2 8 15.2 16.8-0.8 8.8-8 16-16.8 15.2-220.8-12-238.4 196.8-239.2 205.6 0 8-7.2 14.4-16 14.4z" p-id="24687" fill="#e6e6e6"></path><path d="M338.4 292c-4 0-8-1.6-11.2-4.8-6.4-6.4-6.4-16 0-22.4l59.2-59.2-59.2-59.2c-6.4-6.4-6.4-16 0-22.4 6.4-6.4 16-6.4 22.4 0l70.4 70.4c3.2 3.2 4.8 7.2 4.8 11.2 0 4-1.6 8-4.8 11.2l-70.4 70.4c-3.2 3.2-7.2 4.8-11.2 4.8zM633.6 834.4c-6.4 0-12.8 0-19.2-0.8-8.8-0.8-15.2-8-15.2-16.8 0.8-8.8 8-15.2 16.8-15.2 220 12 238.4-196.8 239.2-205.6 0.8-8.8 8-15.2 16.8-14.4 8.8 0.8 15.2 8 14.4 16.8 0 3.2-19.2 236-252.8 236z" p-id="24688" fill="#e6e6e6"></path><path d="M685.6 904c-4 0-8-1.6-11.2-4.8l-70.4-70.4c-6.4-6.4-6.4-16 0-22.4l70.4-70.4c6.4-6.4 16-6.4 22.4 0 6.4 6.4 6.4 16 0 22.4l-59.2 59.2 59.2 59.2c6.4 6.4 6.4 16 0 22.4-3.2 3.2-7.2 4.8-11.2 4.8zM357.6 936.8H222.4c-4.8 0-8-3.2-8-8s3.2-8 8-8h135.2c4.8 0 8 3.2 8 8 0 4-4 8-8 8z" p-id="24689" fill="#e6e6e6"></path></svg>`
    }
];
var apps = [
    {
        txt: "cloudrive",
        url: "https://cloud.yswl.cf",
        purl: "http://192.168.1.10:5212",
        svg: `<svg t="1643952838851" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2042" width="200" height="200"><path d="M832 469.333333C810.666667 302.933333 678.4 170.666667 512 170.666667 379.733333 170.666667 268.8 251.733333 221.866667 371.2c-128 4.266667-221.866667 110.933333-221.866667 238.933333C0 742.4 102.4 853.333333 230.4 853.333333h601.6c106.666667 0 192-85.333333 192-192S938.666667 469.333333 832 469.333333z m0 298.666667H230.4C153.6 768 85.333333 699.733333 85.333333 610.133333s68.266667-157.866667 145.066667-157.866666H256c29.866667 0 59.733333 17.066667 76.8 51.2 8.533333 21.333333 34.133333 29.866667 55.466667 21.333333 21.333333-8.533333 29.866667-34.133333 21.333333-55.466667-21.333333-46.933333-59.733333-76.8-98.133333-89.6C354.133333 302.933333 426.666667 256 512 256c128 0 234.666667 110.933333 234.666667 256 0 12.8-4.266667 46.933333-12.8 72.533333-8.533333 21.333333 4.266667 46.933333 25.6 55.466667s46.933333-4.266667 55.466666-25.6c4.266667-17.066667 8.533333-38.4 12.8-55.466667h4.266667c59.733333 0 106.666667 46.933333 106.666667 106.666667S891.733333 768 832 768z" fill="#75C82B" p-id="2043"></path></svg>`
    }, {
        txt: "alist",
        url: "https://alist.yswl.cf",
        purl: "http://192.168.1.10:5244",
        svg: `<svg t="1587648955866" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11501" width="128" height="128"><path d="M886.857143 530.285714c-0.914286 0.914286-356.571429 0-356.571429 0v374.857143s45.714286 118.857143 164.571429 118.857143c146.285714 0 164.571429-164.571429 164.571428-164.571429s164.571429-18.285714 164.571429-164.571428c0-133.485714-137.142857-164.571429-137.142857-164.571429z m-192 420.571429c-85.942857-0.914286-118.857143-85.942857-118.857143-85.942857V594.285714s237.714286 236.8 237.714286 237.714286c-0.914286 81.371429-74.057143 119.771429-118.857143 118.857143z m146.285714-137.142857c-0.914286 0-237.714286-237.714286-237.714286-237.714286h270.628572s85.028571 32.914286 85.942857 118.857143c0.914286 44.8-37.485714 117.942857-118.857143 118.857143z m45.714286-320s137.142857-31.085714 137.142857-164.571429c0-146.285714-164.571429-164.571429-164.571429-164.571428S841.142857 0 694.857143 0C576 0 530.285714 118.857143 530.285714 118.857143v374.857143s355.657143-0.914286 356.571429 0zM576 159.085714S608.914286 74.057143 694.857143 73.142857c44.8-0.914286 117.942857 37.485714 118.857143 118.857143 0 0.914286-237.714286 237.714286-237.714286 237.714286V159.085714zM841.142857 210.285714c81.371429 0.914286 119.771429 74.057143 118.857143 118.857143-0.914286 85.942857-85.942857 118.857143-85.942857 118.857143H603.428571s236.8-237.714286 237.714286-237.714286zM137.142857 530.285714S0 561.371429 0 694.857143c0 146.285714 164.571429 164.571429 164.571429 164.571428s18.285714 164.571429 164.571428 164.571429c118.857143 0 164.571429-118.857143 164.571429-118.857143V530.285714s-355.657143 0.914286-356.571429 0z m310.857143 334.628572s-32.914286 85.028571-118.857143 85.942857c-44.8 0.914286-117.942857-37.485714-118.857143-118.857143 0-0.914286 237.714286-237.714286 237.714286-237.714286v270.628572zM182.857143 813.714286c-81.371429-0.914286-119.771429-74.057143-118.857143-118.857143 0.914286-85.942857 85.942857-118.857143 85.942857-118.857143H420.571429S183.771429 813.714286 182.857143 813.714286zM329.142857 0C182.857143 0 164.571429 164.571429 164.571429 164.571429S0 182.857143 0 329.142857c0 133.485714 137.142857 164.571429 137.142857 164.571429 0.914286-0.914286 356.571429 0 356.571429 0V118.857143S448 0 329.142857 0zM149.942857 448S64.914286 415.085714 64 329.142857c-0.914286-44.8 37.485714-117.942857 118.857143-118.857143 0.914286 0 237.714286 237.714286 237.714286 237.714286H149.942857zM448 429.714286S210.285714 192.914286 210.285714 192c0.914286-81.371429 74.057143-119.771429 118.857143-118.857143 85.942857 0.914286 118.857143 85.942857 118.857143 85.942857V429.714286z" p-id="11502" fill="#e6e6e6"></path></svg>`
    }, {
        txt: "jellyfin",
        url: "",
        purl: "http://192.168.1.10:8096",
        svg: `<svg t="1643955630667" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14078" width="200" height="200"><path d="M961.57 180.59c0-7.4-0.99-14.66-4.16-21.4-9.84-20.93-26.6-30.42-49.52-30.4-131.65 0.1-263.3 0.05-394.95 0.05H254.47c-45.99 0-91.99-0.08-137.98 0.03-31.15 0.07-52.35 21.46-52.35 52.52V844.8c0 30.26 21.71 52.04 51.88 52.04h793.89c29.57 0 51.63-21.84 51.63-51.34 0.05-221.64 0.04-443.27 0.03-664.91z m-160.78 76.58c22.13-0.47 44.28-0.47 66.41 0 17.58 0.38 31.1 15.42 30.64 32.91-0.45 17.07-14.69 30.78-32.2 30.91-10.49 0.07-20.97 0.01-31.46 0.01-10.65 0-21.31 0.06-31.96-0.01-17.64-0.11-31.89-14.08-32.21-31.48-0.31-17.01 13.44-31.98 30.78-32.34z m97.05 160.64c-0.33 17.46-14.73 31-33.03 31.02-10.32 0.01-20.64 0-30.97 0-10.32 0-20.64 0.01-30.97 0-18.23-0.03-32.49-13.62-32.86-31.28-0.36-17.34 13.77-32.03 31.87-32.32 21.3-0.35 42.62-0.3 63.93-0.02 18.4 0.26 32.37 14.76 32.03 32.6zM161 193.01c10.65-0.04 21.3-0.01 31.96-0.01 10.82 0 21.64-0.05 32.45 0.01 17.15 0.1 31.38 14.34 31.58 31.53 0.2 17.03-13.87 32.01-30.93 32.23-21.97 0.29-43.94 0.25-65.91 0.01-17.31-0.19-31.31-15.16-31-32.59 0.31-17.2 14.5-31.12 31.85-31.18zM256.96 354c-0.67 17.28-14.68 30.48-32.94 30.81-10.32 0.19-20.64 0.03-33.26 0.03-9.68-0.41-21.7 0.93-33.63-0.57-16.65-2.09-28.34-15.81-27.98-32.24 0.36-16.14 13.16-30.2 29.67-30.7 22.79-0.69 45.63-0.73 68.41 0.01 17.28 0.57 30.38 15.8 29.73 32.66z m-98.26 95.73c23.38-1.46 46.94-1.67 70.32 0.18 16.85 1.33 29.04 16.86 27.88 33.21-1.2 17.08-14.81 29.89-32 30.02-10.65 0.08-21.31 0.02-31.96 0.02-9.99 0-19.97 0.01-29.96 0-18.65-0.01-32.58-12.25-33.82-29.71-1.21-17.24 11.11-32.58 29.54-33.72z m66.01 318.68c-10.65 0.05-21.31 0.01-31.96 0.01-10.32 0-20.64 0.03-30.96-0.01-18.48-0.06-32.7-13.95-32.62-31.82 0.07-17.63 14.31-31.54 32.46-31.59 20.98-0.05 41.95-0.06 62.93 0 18.04 0.05 32.36 14.09 32.45 31.67 0.07 17.59-14.2 31.65-32.3 31.74z m32.27-158.06c-0.66 16.68-14.51 30.48-30.89 30.63-11.15 0.1-22.31 0.02-33.46 0.02-10.65 0-21.31 0.03-31.96-0.01-16.88-0.07-30.94-13.68-31.51-30.44-0.57-16.79 11.96-31.83 28.59-32.56 23.6-1.04 47.27-1.05 70.87 0.01 16.23 0.74 29.01 16.08 28.36 32.35z m128.42 91.67V326.43c108.65 62.73 216.65 125.08 325.27 187.8C601.94 577 493.93 639.36 385.4 702.02z m413.22-188.01c23.6-0.78 47.26-0.76 70.87 0.02 16.08 0.53 28.46 15.36 28.36 31.78-0.1 16.01-12.76 30.34-28.52 31.2-11.78 0.65-23.62 0.13-35.43 0.13v0.02c-11.65 0-23.32 0.51-34.93-0.12-16.08-0.87-28.86-15.17-28.95-31.4-0.11-16.24 12.45-31.1 28.6-31.63z m3.55 127.85c21.31-0.05 42.62-0.07 63.92 0 17.72 0.06 31.76 14.13 31.75 31.66-0.01 17.51-14.07 31.51-31.83 31.62-10.65 0.07-21.31 0.01-31.96 0.01s-21.31 0.05-31.96-0.01c-17.75-0.1-31.95-14.06-32.08-31.46-0.13-17.59 14.15-31.78 32.16-31.82z m95.66 161.02c-0.9 16.37-14.67 29.67-31.71 29.89-21.47 0.29-42.95 0.33-64.42-0.01-17.81-0.29-31.85-14.82-31.7-31.99 0.15-17.61 14.47-31.53 32.54-31.6 10.49-0.04 20.98-0.01 31.46-0.01v0.26c11.98 0 24.06-0.99 35.91 0.23 17.14 1.76 28.84 16.57 27.92 33.23z" fill="#00A7FE" p-id="14079"></path></svg>`
    }, {
        txt: "reader",
        url: "https://reader.yswl.cf",
        purl: "http://192.168.1.10:8083",
        svg: `<svg t="1643966374843" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="38597" width="200" height="200"><path d="M942.7456 293.2736h-35.9424l3.1232 474.5728c0 15.0528-17.8176 22.0672-31.3856 15.4624-147.0464-71.6288-297.472-7.2704-348.2112 15.9744-8.448 3.8912-18.0736-2.2528-18.0736-11.5712v-1.3824c0 9.5232-10.1376 15.7696-18.5856 11.3152-141.4656-75.0592-280.6272-30.2592-341.8112-7.3216-26.1632 9.7792-47.7696-11.4176-47.7696-11.4176l-0.2048 83.1488c0 17.92 44.4928-0.6656 62.3616-2.0992l340.1216-27.3408c1.6384-0.1536 9.5744-0.1536 11.2128 0l422.1952 38.2976c17.8688 1.4336 33.6384-2.0992 33.6384-20.0192V323.9936c0.0512-16.9984-13.7216-30.72-30.6688-30.72z" fill="#BC9BE0" p-id="38598"></path><path d="M164.3008 252.8768v472.2688c0 13.7216 13.1584 22.9376 25.088 17.6128 52.992-23.9104 181.7088-67.2768 306.2784 2.7648 7.424 4.1472 16.3328-1.6384 16.3328-10.5472V264.3456c0-7.6288-4.2496-14.5408-10.8544-17.5616-41.5744-18.8416-189.8496-72.3968-327.424-10.8032-6.144 2.7648-9.4208 9.8816-9.4208 16.896zM558.3872 252.8768v472.2688c0 13.7216 13.2096 22.9376 25.1392 17.6128 53.0944-23.9104 182.0672-67.2768 306.8928 2.7648 7.424 4.1472 16.384-1.6384 16.384-10.5472V264.3456c0-7.6288-4.2496-14.5408-10.9056-17.5616-41.6256-18.8416-190.208-72.3968-328.0384-10.8032-6.144 2.7648-9.472 9.8816-9.472 16.896z" fill="#FFB47A" p-id="38599"></path><path d="M942.7456 262.5536h-20.5824V235.52c0-14.3872-8.4992-27.2896-21.6576-32.9216-50.8928-21.76-229.12-86.1696-385.2288 0.1024-1.4848 0.8192-2.9184 1.792-4.2496 2.7648-1.6896-1.0752-3.4304-2.048-5.2736-2.8672-50.8928-21.76-229.12-86.1696-385.2288 0.1024a36.0192 36.0192 0 0 0-18.6368 31.488v28.3648h-14.0288c-25.3952 0-46.08 20.6848-46.08 46.08v526.848c0 12.8 5.4272 25.1904 14.848 33.8944a46.2592 46.2592 0 0 0 34.9184 12.0832l419.2768-33.7408c0.8192-0.0512 1.6384-0.0512 2.4576 0l425.8816 33.792a46.1312 46.1312 0 0 0 34.9184-12.0832 46.19776 46.19776 0 0 0 14.7968-33.8432V308.6336c-0.0512-25.4464-20.736-46.08-46.1312-46.08zM527.36 234.1888c0-1.8944 1.0752-3.6352 2.7648-4.5568 53.8624-29.7472 110.8992-39.936 163.6864-39.936 88.2688 0 164.7616 28.416 194.56 41.216 1.8432 0.768 3.0208 2.6112 3.0208 4.6592v491.52c0 2.4576-1.536 3.7888-2.4064 4.352-0.6656 0.4096-1.8432 0.9728-3.2768 0.768a4.74624 4.74624 0 0 1-1.536-0.4608 361.344 361.344 0 0 0-66.2528-24.576c-124.16-32.8192-239.0528 6.8608-290.56 29.8496V234.1888z m-394.8032 0c0-1.8944 1.0752-3.6352 2.7648-4.5568 143.872-79.5136 310.6304-19.1488 358.2976 1.28 1.8432 0.768 3.0208 2.56 3.0208 4.608v499.7632c-4.1984-2.1504-8.3968-4.1984-12.5952-6.144-1.28-0.6144-2.6112-1.1776-3.8912-1.7408-2.9696-1.3312-5.9392-2.6624-8.9088-3.8912-1.4336-0.6144-2.8672-1.1776-4.3008-1.792-3.0208-1.2288-6.0928-2.4064-9.1136-3.5328-1.2288-0.4608-2.4064-0.9216-3.6352-1.3312-4.1984-1.536-8.3968-2.9696-12.5952-4.3008-0.4096-0.1536-0.8192-0.256-1.2288-0.3584-3.7888-1.1776-7.5776-2.304-11.3664-3.3792-1.3312-0.3584-2.6112-0.7168-3.8912-1.0752-2.9184-0.768-5.888-1.536-8.8064-2.2528-1.3824-0.3584-2.7648-0.6656-4.1472-0.9728-3.1232-0.7168-6.1952-1.3824-9.2672-1.9968-1.0752-0.2048-2.0992-0.4608-3.1744-0.6656-4.1472-0.8192-8.2432-1.536-12.3392-2.1504l-1.9968-0.3072c-3.4304-0.512-6.8608-1.024-10.2912-1.4336l-3.84-0.4608c-2.8672-0.3072-5.7344-0.6144-8.6016-0.8704-1.28-0.1024-2.56-0.256-3.84-0.3584-3.1744-0.256-6.2976-0.4608-9.4208-0.6656l-2.56-0.1536c-3.9936-0.2048-7.936-0.3584-11.8784-0.4608-0.768 0-1.536 0-2.304-0.0512-2.3552-0.0512-4.7104-0.1024-7.0656-0.1024-0.6144 0-1.1776 0.0512-1.792 0.0512-3.4816 0-6.8608 0.1024-10.2912 0.2048-1.2288 0.0512-2.4576 0.0512-3.6864 0.1024-4.5568 0.1536-9.0624 0.4096-13.5168 0.7168l-3.84 0.3072c-3.2256 0.256-6.4 0.512-9.5744 0.8192-1.6896 0.1536-3.328 0.3584-4.9664 0.512-2.7648 0.3072-5.5296 0.6144-8.2432 0.9728-1.6896 0.2048-3.3792 0.4608-5.0176 0.6656-2.7136 0.3584-5.4272 0.768-8.0896 1.1776-1.536 0.256-3.072 0.4608-4.5568 0.7168-3.1744 0.512-6.3488 1.0752-9.4208 1.6896-0.9216 0.1536-1.792 0.3072-2.7136 0.512-3.9424 0.768-7.8336 1.5872-11.6224 2.4064-1.2288 0.256-2.4064 0.5632-3.584 0.8192-2.6112 0.6144-5.2224 1.1776-7.8336 1.8432-1.4336 0.3584-2.7648 0.7168-4.1984 1.024-2.304 0.5632-4.608 1.1776-6.8608 1.792-1.3824 0.3584-2.7136 0.7168-4.0448 1.0752-2.304 0.6144-4.5568 1.28-6.7584 1.9456-1.1776 0.3584-2.3552 0.6656-3.4816 1.024-2.816 0.8704-5.5808 1.6896-8.2944 2.56-0.4608 0.1536-0.9216 0.256-1.3312 0.4096-3.1232 1.024-6.144 1.9968-9.0624 3.0208-0.9728 0.3072-1.8432 0.6656-2.816 0.9728-1.9968 0.6656-3.9424 1.3824-5.8368 2.048-1.024 0.3584-2.048 0.768-3.072 1.1264-1.7408 0.6144-3.4304 1.28-5.0688 1.8944-0.9728 0.3584-1.8944 0.7168-2.816 1.0752-1.6896 0.6656-3.328 1.3312-4.9152 1.9456-0.7168 0.3072-1.4848 0.6144-2.2016 0.8704-2.2528 0.9216-4.4032 1.792-6.4512 2.6624-2.2016 0.9216-3.9424 0.1536-4.8128-0.4096a5.00224 5.00224 0 0 1-2.304-4.3008V234.1888z m825.5488 601.344c0 4.352-1.7408 8.3456-4.9152 11.264-3.1744 2.9696-7.3728 4.352-11.6224 4.0448l-425.8304-33.792a44.36992 44.36992 0 0 0-7.3728 0l-419.2768 33.7408c-4.2496 0.3584-8.448-1.0752-11.6224-4.0448-3.1744-2.9184-4.9664-6.9632-4.9664-11.3152V308.6336c0-8.448 6.912-15.36 15.36-15.36h14.0288v435.9168a35.6864 35.6864 0 0 0 16.0768 29.9008 35.75296 35.75296 0 0 0 33.792 3.072c55.0912-23.4496 197.888-70.0928 334.5408 2.4064 1.024 0.512 2.048 0.9728 3.072 1.3824 0.3072 0.1024 0.6656 0.2048 0.9728 0.3072 0.7168 0.256 1.4336 0.512 2.2016 0.6656 0.4096 0.1024 0.768 0.1536 1.1776 0.256 0.6656 0.1536 1.3312 0.3072 2.048 0.3584 0.4096 0.0512 0.8704 0.1024 1.28 0.1024 0.6656 0.0512 1.28 0.1024 1.9456 0.1024h0.4096c0.256 0 0.512-0.0512 0.8192-0.0512 0.768 0 1.536-0.0512 2.304-0.1536l1.28-0.1536c0.768-0.1024 1.4848-0.256 2.2528-0.4608l1.2288-0.3072c0.8192-0.256 1.5872-0.512 2.3552-0.8192 0.3072-0.1536 0.6656-0.256 0.9728-0.3584 0.0512-0.0512 0.1536-0.0512 0.2048-0.1024 0.512 0.3072 1.0752 0.5632 1.6384 0.8192 0.3584 0.2048 0.7168 0.3584 1.0752 0.5632 1.1264 0.512 2.304 0.9728 3.4816 1.28h0.0512a21.26336 21.26336 0 0 0 4.7104 0.8704c0.8704 0.1024 1.6896 0.1536 2.56 0.2048 0.2048 0 0.3584 0.0512 0.5632 0.0512 0.3584 0 0.7168-0.0512 1.0752-0.0512 0.4608 0 0.9216-0.0512 1.3824-0.0512 0.6144-0.0512 1.2288-0.1536 1.8432-0.256 0.4096-0.0512 0.8704-0.1024 1.28-0.2048 0.6656-0.1536 1.3312-0.3072 1.9968-0.512l1.0752-0.3072c1.024-0.3584 2.048-0.7168 3.0208-1.1776 54.1184-24.7808 195.072-75.0592 334.2848-7.2704 1.3824 0.6656 2.816 1.28 4.2496 1.7408 0.768 0.256 1.5872 0.4608 2.4064 0.6656 0.6656 0.1536 1.28 0.4096 1.9456 0.512 0.8192 0.1536 1.6896 0.256 2.5088 0.3584 0.6144 0.1024 1.28 0.2048 1.8944 0.256 1.3312 0.1024 2.6112 0.1024 3.9424 0.0512h0.512c1.28-0.0512 2.56-0.256 3.84-0.4608 0.2048-0.0512 0.4096-0.0512 0.5632-0.0512 4.4032-0.8192 8.704-2.4576 12.6464-4.9152a35.6864 35.6864 0 0 0 16.8448-30.4128V293.2736h20.5824c8.448 0 15.36 6.912 15.36 15.36v526.8992z" fill="#333333" p-id="38600"></path></svg>
    }, {
        txt: "bitwarden",
        url: "https://bit.yswl.cf",
        purl: "http://192.168.1.10:8090",
        svg: `<svg t="1587649059957" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14912" width="128" height="128"><path d="M483.84 611.84l-7.68 7.68v-7.68h7.68z" fill="#2CA6E0" p-id="14913"></path><path d="M476.16 619.52v-7.68c-7.68-48.64-30.72-94.72-66.56-130.56-35.84-35.84-84.48-58.88-130.56-66.56-30.72-5.12-64-2.56-94.72 5.12 2.56 0 7.68-2.56 10.24-2.56 25.6 0 46.08 20.48 46.08 46.08 0 20.48-12.8 38.4-30.72 43.52 48.64-10.24 99.84 2.56 135.68 38.4 56.32 56.32 58.88 148.48 2.56 207.36l128-133.12z" fill="#E50012" p-id="14914"></path><path d="M1024 627.2c-5.12-53.76-28.16-104.96-69.12-145.92-38.4-38.4-89.6-61.44-140.8-69.12-23.04-2.56-43.52-2.56-66.56 0 2.56-23.04 2.56-43.52 0-66.56-5.12-51.2-28.16-99.84-69.12-140.8l-7.68-7.68-5.12-5.12-5.12-5.12c-2.56 0-2.56-2.56-5.12-2.56-2.56-2.56-5.12-2.56-7.68-5.12 0 0-2.56 0-5.12-2.56 0 0-2.56 0-2.56-2.56-2.56-2.56-5.12-2.56-7.68-5.12L601.6 153.6h-5.12c-2.56 0-2.56-2.56-5.12-2.56s-2.56 0-5.12-2.56h-2.56c-2.56 0-2.56 0-5.12-2.56-79.36-23.04-171.52-2.56-232.96 61.44-56.32 56.32-79.36 133.12-66.56 207.36 48.64 7.68 94.72 30.72 130.56 66.56-40.96-40.96-53.76-102.4-35.84-153.6 0-2.56 2.56-5.12 2.56-7.68 0 0 0-2.56 2.56-2.56 0-2.56 2.56-5.12 2.56-7.68 0 0 0-2.56 2.56-2.56 0-2.56 2.56-5.12 2.56-5.12s0-2.56 2.56-2.56c2.56-2.56 5.12-5.12 5.12-10.24 2.56-5.12 5.12-7.68 10.24-12.8l5.12-5.12c58.88-58.88 151.04-58.88 209.92 0 56.32 56.32 58.88 148.48 2.56 207.36l-2.56 2.56-2.56 2.56c-58.88 56.32-151.04 56.32-207.36-2.56 35.84 35.84 58.88 84.48 66.56 130.56h7.68l-7.68 7.68-130.56 130.56-2.56 2.56-2.56 2.56c-58.88 56.32-151.04 56.32-207.36-2.56-58.88-58.88-58.88-151.04 0-209.92 20.48-17.92 43.52-30.72 66.56-35.84 2.56 0 5.12 0 5.12-2.56 17.92-5.12 30.72-23.04 30.72-43.52 0-25.6-20.48-46.08-46.08-46.08-5.12 0-7.68 0-10.24 2.56-40.96 10.24-79.36 30.72-110.08 64-92.16 92.16-92.16 243.2 0 337.92 38.4 38.4 89.6 61.44 140.8 69.12 69.12 7.68 143.36-15.36 197.12-69.12l140.8-140.8 130.56-130.56-2.56 2.56 2.56-2.56 7.68-7.68-7.68 7.68c58.88-56.32 151.04-56.32 207.36 2.56 25.6 25.6 38.4 56.32 43.52 89.6v2.56c2.56 23.04 23.04 38.4 46.08 38.4 25.6 0 46.08-20.48 46.08-46.08 2.56-5.12 2.56-7.68 2.56-7.68z" fill="#2CA6E0" p-id="14915"></path><path d="M929.28 824.32m-46.08 0a46.08 46.08 0 1 0 92.16 0 46.08 46.08 0 1 0-92.16 0Z" fill="#2CA6E0" p-id="14916"></path></svg>`
    }, {
        txt: "supervisor",
        url: "https://super.yswl.cf",
        purl: "http://192.168.1.10:9009",
        svg: `<svg t="1643952838851" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2042" width="200" height="200"><path d="M832 469.333333C810.666667 302.933333 678.4 170.666667 512 170.666667 379.733333 170.666667 268.8 251.733333 221.866667 371.2c-128 4.266667-221.866667 110.933333-221.866667 238.933333C0 742.4 102.4 853.333333 230.4 853.333333h601.6c106.666667 0 192-85.333333 192-192S938.666667 469.333333 832 469.333333z m0 298.666667H230.4C153.6 768 85.333333 699.733333 85.333333 610.133333s68.266667-157.866667 145.066667-157.866666H256c29.866667 0 59.733333 17.066667 76.8 51.2 8.533333 21.333333 34.133333 29.866667 55.466667 21.333333 21.333333-8.533333 29.866667-34.133333 21.333333-55.466667-21.333333-46.933333-59.733333-76.8-98.133333-89.6C354.133333 302.933333 426.666667 256 512 256c128 0 234.666667 110.933333 234.666667 256 0 12.8-4.266667 46.933333-12.8 72.533333-8.533333 21.333333 4.266667 46.933333 25.6 55.466667s46.933333-4.266667 55.466666-25.6c4.266667-17.066667 8.533333-38.4 12.8-55.466667h4.266667c59.733333 0 106.666667 46.933333 106.666667 106.666667S891.733333 768 832 768z" fill="#75C82B" p-id="2043"></path></svg>`
    }
];
