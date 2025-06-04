import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FeatureCompanyDetails = () => {
    const { title } = useParams();
    const [company, setCompany] = useState([]);
    const [activeButton, setActiveButton] = useState(0)

    const cards = [
        {
            logo: 'https://www.robi.com.bd/_next/static/media/robi-logo-2.d08ae93d.svg',
            image: 'https://www.tbsnews.net/sites/default/files/styles/social_share/public/images/2024/02/15/article_bannerr_0.jpg',
            title: 'Robi',
            ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
            numberOfRatings: 4.0,
            des: 'Bangladesh largest Telecom Company',
            subcompany: ['Retail', 'Telecom', 'Digital Services', 'IoT', 'Mobile Financial'],
            reviewText: '600+ Reviews',
            descp: 'True 5G Provider',
            jobs: {
                openPositions: 42,
                hiringDepartments: ['Engineering', 'Marketing', 'Customer Support', 'Data Science', 'Finance'],
                jobTypes: ['Full-time', 'Hybrid', 'Remote'],
                benefits: ['Health insurance', 'Performance bonus', 'Flexible hours', 'Training budget']
            },
            diversity: {
                femaleWorkforce: '35%',
                diversityPrograms: ['Women in Tech', 'Disability Inclusion', 'Regional Diversity Hiring'],
                awards: ['Best Workplace for Diversity 2023']
            },
            overview: [{
                About: 'Robi Axiata Limited is a leading telecommunications provider offering mobile and digital services across Bangladesh with strong diversity initiatives.',
                Moto: ['Digital innovation', 'Customer-centric services', 'Inclusive workplace'],
                Business: ['Mobile telecom', 'Digital services', 'Mobile financial services'],
                image: 'https://investbangladesh.co/wp-content/uploads/2024/03/robi.png'
            }]
        },
        {
            logo: 'https://media.licdn.com/dms/image/v2/C510BAQGhLfXPZtoQQQ/company-logo_200_200/company-logo_200_200/0/1631303719187?e=2147483647&v=beta&t=mGtLv24hFqc13UCFHXJUxT-Dm0mekQtxBqpGbiUvAj0',
            title: 'Bashundhara',
            image: 'https://c8.alamy.com/comp/E2E4BW/bangladesh-dhaka-dacca-bashundhara-city-is-one-of-the-biggest-shopping-E2E4BW.jpg',
            ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
            numberOfRatings: 5.0,
            reviewText: '400+ Reviews',
            subcompany: ['Real Estate', 'Manufacturing', 'Media', 'Healthcare', 'Hospitality'],
            descp: 'Diversified Conglomerate',
            jobs: {
                openPositions: 78,
                hiringDepartments: ['Construction', 'Corporate', 'Media', 'Medical', 'Engineering'],
                jobTypes: ['Full-time', 'On-site', 'Internship'],
                benefits: ['Housing allowance', 'Education support', 'Family healthcare']
            },
            diversity: {
                femaleWorkforce: '28%',
                diversityPrograms: ['Leadership Equity Program', 'Rural Employment Initiative'],
                awards: ['Top Employer for Women 2022']
            },
            overview: [{
                About: 'The Bashundhara Group is a diversified conglomerate with strong commitments to workforce diversity and community development.',
                Moto: ['Skill development', 'Health benefits', 'Inclusive growth'],
                Business: ['Real estate', 'Manufacturing', 'Media'],
                image: 'https://today.thefinancialexpress.com.bd/uploads/1582472002.jpg'
            }]
        },
        {
            logo: 'https://jamunagroup.com.bd/images/logo/1662050814-company-logo.png',
            title: 'Jamuna',
            image: 'https://jamunagroup.com.bd/images/videos/1669727065-9An2vn98aU-company-slider-video.jpg',
            ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
            numberOfRatings: 4.0,
            subcompany: ['Textiles', 'Steel', 'Electronics', 'Automobiles', 'Real Estate'],
            reviewText: '600+ Reviews',
            descp: 'Industrial Powerhouse',
            jobs: {
                openPositions: 35,
                hiringDepartments: ['Textile Engineering', 'Quality Control', 'Supply Chain', 'Sales'],
                jobTypes: ['Full-time', 'Contract'],
                benefits: ['Transportation', 'Overtime pay', 'Factory meals']
            },
            diversity: {
                femaleWorkforce: '40%',
                diversityPrograms: ['Factory Women Empowerment', 'Vocational Training'],
                awards: ['Safe Workplace Certification']
            },
            overview: [{
                About: 'Jamuna Group drives industrial growth while maintaining strong diversity in its manufacturing workforce.',
                Moto: ['Employee safety', 'Skill training', 'Gender equity'],
                Business: ['Textiles', 'Steel', 'Electronics'],
                image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEhIVFRUVFhUYFxUVFRcYFRUWFRgWFhgWFhYaHSkgGBolHRcYITEhJyktLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHyUtLS0tLS0tLS0tLy0tLSstLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKIBNwMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABEEAACAgEDAgQDBAYGCgEFAAABAgMRAAQSIQUxEyJBUQZhcRQygZEHI0JSobEzYoLB0fAVFiRDU2NyktLhskSTorPC/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAA5EQACAgECAwQJAwMEAgMAAAAAAQIRAxIhBDFBBRNRYRQicYGRobHR8DJSwQYVIzNC4fFisiRTcv/aAAwDAQACEQMRAD8A8WrLnVQVgUSafTtIyxorO7EBVUEsxPYADknBD2H9Q0MkEjQTIY5EO1kbgg/55v1BByCE0yDJJDAEwAwNgwAwBawTQVgUFYFBWBQVgUKFwKFC4LUKRkktAFwKHKvGEWUdhu3BWgAwEgK4DiNK5BWhKwRQVgUFYFBWBQVgUFYFBWBQVgUFYFBWBQVgUFYFBWBQVgUFYFD6yS9GpoehvPE0kDLJIll4BxMFHPiRqf6Va77fMPUVzlbKOVPc9X0Uek+HdPEwjGq6pqUBRRzsD8ALXIS/Lx5pDfYfdgydzfkGg6D1E6bqsvUIgNTr/s8cAJjLPIPEQKoQnaoDIPkFJPAJyCu17G1F8DRSaNujpp/IkZYdQ8tHXKSHG29+0fdvtQZO4yRq3s5r4G6DDDoJNLr4wknUdW+kUtVxNCj7GHzE4IFepXIZMnbtHRdK6bo4I4dGChk6VqNI+pkoU0mqDJJ5iPuAuCSewQXW3BHMw+kfC2p0es6trtVCsembT67ZKWjKsZJFePaASbKg+ny78ZIu0kdL1LQdN1HWUiAXT6zStE6igI9XCUDFa7b1BNetD1H3YG9WZPw18NnTanWdROk+0zTarUrptONi1pxORNP5yFA2ml97A7PkkXtR59+lX4P/ANHaw+GpGnnt4fZefPF/ZJFf1SvzyUbY3ao4ussa0FYFBWBQoXFEqItYJoeFyaLqI2sFaFIwWaHovGSi8Y7DAMgokIVwVaHVgtVoZtwVoQrkUVcRKwRQVgUFYFBWBQVkChKwKCsCgrAoKwKFrJFCVkChayRQlZAoKwKH1li9DkYqQykggggg0QRyCCOxyKIas0tb1yWaWKaY+I8QRbPdljYsob86vIoqoJcif/TUW5GOmsqRz481kBSpAO7y33Ne2NJHdvxDR9cWPafB3bdl3NJTUjq1rdWzMH+WwAdzah3ZW1PUldNvhebagDmWQlXViXkAJoF7AI7CuMaSdA+fqiMrAQKrPwWDvz5FXlQaY2C9nuW+ttIUAj6pHs8N4N4CoBc0vlZS251F0CwIFVQ28dzjSNDscOqxb97aYN5g1GWTdQaRgu+93Csi9/8AdKfU4oaGR6XqxRt2ywEjXaXevI0bMbJ43bGBA4Ac1jSHAb1PqQmVR4e0g/eDubARFraTQNqWscksclIRhRnVkl6CsChwXFEqItZJahyrii0YisMkmSEVchIiMRWGCWiRF4yyRrGOxHWVMq3BhhiSEUYRERXXDJlEdBpne9iM1cnapND3Ndsi0ZulzISuA4iVgrQlYFBWQKDBAVgmgrBFAMIUFYJoKwKCsEUFYFBWCaCsEUPrLGlBWBQVgUFYFBWBQVgUFYFBWBQVgUFYFBWBQVgUOC4osojqyS1AFwFElC5JrppEZGQZtD1XJLxiIwyGQ0evabQdMKBvs2kYbFto5mJaQQySSeHH9oJNMEUI5Qnzc9sz3ORPJ4v8fsIZ9B0yORo302nLbGofroyrjSJqF8VH1G9Q7FqpeNoUncbEblP8j6/l0TdBl0o0+rhaOEwLq5FZTJI4SFpo1VvCDml27v11oF2L988Y3E1K0/IzZY+mRgo+l0pmMeqZQjSNGjwpOypIRqS3+7j9Bv8AF8vbG5FZOjZsaCLpayQGKCDxGmqGWKadi4TwT4gjRydOKeQkO1r4XrZpuS+8adss9U6okShpFhicr4zxxzOsrssGm2oJl1CLKwDyEOSbEZUDdyYM1F9BYukdFbe0kWl5lZQzahwSxYhQQZiWJFMTYPm4BHOBc/M4roPRNIw1MsqwMrPqBGpm2iHwlldUC+KrsWPh7TT+VHBq7E2aTctkX/inSdNjWJ4tPBEjz6dQzl5RJC295Jl2aiygXwwybVIJIDEnyxuUjqNHR9M6WUBk02gDLtVwuq3BnZoVV12ag7I2LTAWSQEVmrdtwVuXmWVl0kscKayPSCJEiKq0rsVAigEuxxqCypGxkQoR+ylXtOORG6exUg6d0vyrJpdIkm22QSSul/akhNSiegwQklCPUMGIBGCbn4jtDD0sRpqEh0m5WiYTJPIvmuMsRE04aEoSfvt6A2BgetyY74m1Gg8R5NXpoGZUhGxTI0hDByGWRpo/tEZO1fEVDV82FGBFS6GR8Tafpq6fV+DBpUlj8ZY1SWSV2VNXDCk+4SlUJR3/AFbAnyhvu8YLR12jzSs0OqgrAoKwKCsCgrAofWSXoKwKCsCgrAoKwKCsCgrAoKwKCsCgrAoKwKHBcmiyiOrJLUG3AolRMlI1jAR8MSGBcgokShck107DawUrcuaOVo2WRDtZGVlYdwykEEfQjLVaOhQTi0yTrfWJ9U4fUSeIwFA7VFC7obQOB6D09MppSOZYow/Sa3wJ8Ox62Zo5GoKl0GdH5IAZWEMi8EhaarLirPGVk6M883CNr8+aLXVfgZVLSRauPwATtMsOsEqhUjlJkVdNwAsqHfQBDA8dhGoyWXo1v7vuR/C3wTPqlE+n1MKbWPmb7THsZPN/S+Ds3ADdw1gEdslySLSzxhtJP5fcu9U+B9S77p9dA77ZeZDq2YrpwpeiYCSAGWvcHi8al0QWaFerF/Lr7xmn/RbqZCRHqdM9TNASv2khZUBLKzCCgBR8x4vi7yutGb4iK6P5fcl6L+joM9TzxMhM0dRvqI3SSHaXLF9KQqrYB3AA7hRyHIrPPtsvp9yKf9GrSTyx6XUIyRybLkh1YKGgdsjjT7ARfe6IIPFjJUh3ySTa+n3OT0PRWkcoZYofKWR52aKOSiB5HZasg3zXA9+MOReUklZeX4L1e1iRGrq0yiFpUE0p05ZZvCS/PtKsOO+01eRqRTvY2N/1VbbHINTpTFIdvjeKfDSQxmRY5bXdGxAYDcALB5rnGpDvVvsZfVemvp5TDJt3AKbVgysrqHRlYcMpVgQfnlkaRpq0VKyaJoWsE0JWBQtYFCVkChayRQVgUSCM1urgdz7fX2ySwlYJoKwKCsCgrAoKwKCsCgrAoKwKALgUOC5NF1EfWSWomGjcp4gUlAaLDsDzwfnx/L3yCLV0RomSkaRiSkVljWqRCwypi0ORclItGJIwyTRoYq5FFFHctInBzStjrjD1StIuUZzTiafw/wBXfSSeKiRu1ChKpZQVZXVgAR5gVBF5VxtGc8KyKmbMnx/qzOJix2ko8kQO1JZFhWAu20DuEB29hXbKvGYS4SOmvznZQ6F8Uvp0WNoYpljEvhFwQ8JmVlcq69wd3KtY7dshwInw6k7Tot6f40nEboyqzSGZnkPBLyReCpCjyoFXgKAAaHsMnuy64WLfPw+5kda6u80sky3F4pYtGjvs3SUZaBJpWbzbe3YemSoJIssCiq5mvpfj3UeX7Si6sB3ZhOSylJFjUxhPuqB4djgiyeDlHjOeXDLpsDfG8njJL4e/wp5JY2kc+KBMoWSJjGFRlNL+xwBQ44xoHo21Gd0X4s1WnlWUv4+xCirOWcKp22IyTuiPlHKkHgZOhEz4eLVEn+t8q3sijsGfwZZN8k8C6gszqspYbzbsdzqTbsRV5XQZ+jonHx5Pt0/6mHfpm8h2/qmXaVIk0/8AR7+R+sUK1CsaSPR1b3MPr/UvtU76jaVMlEgyPJyAAaZ7auOATwKHploqjSENKozqyS9BWBQVkCgrAoKwKCsCgrJFFqGRlbcl9jYqxt9j7rXvglrxLQ08bFXHlRyEYX/RO3Y8919RfoGHpeCN1sVNRAVYqRRDFSO9FeDz685JZbk0HTmaUQ15iQDX7Pvf09fociyG9rJes9MEEnhbwxAs+nPcAfhWEyIu1ZRCj17k974A5vj3/HJLUNC32w9uZNWTLo3P7J/Hj+eZPNjXU0WGb6DvsEn7v8RkekY/Et6PPwGtp2HdTmkckJcmR3bXNGpH9mGmYEEzX5T2occfxP8AkZbezOpavIygt8DJNDZj6syRHTFAUs7hW1v2fbsfven8qyKKLFb1EI0ALLsa1e9hPfd+43s1kD8QexyyOiLpb9CnMtf59smyZOx2m0TyOIlXzH0/C/wytmLaSsll0bRsVYcirrsCRdX7/wCGaRo6MSTVjJIxVj2/Lmq57+/HvktF5KxkYwisUW0HBzRcjsgvVKzpmdHNKIiqMUiqSGuuVZWSISMqZND0yUXiPZckvKNkLLlaMZRG1gpQVkE0IVwVcRhXIKOIlZFEUFZIoKyBQVkigrIFBWBQVgUFZIo0NFHISRFYdRyt+Z6NmlP3qoeX5du+GJV1LPhqymRBSv5JUHaNzyrD+oWAI9uR7XBWq2ZaSej9o9QjObF3IREgH/3Of7JyCunoVInK1HENztTSvfoDu2bvRB3Zr5PyAuS7XVlDUMSQPvEcbgSd3JN8/l+GSXSNjoXw7qNU4ijRnJo7F7ADgFj2Ud+TnLPPbqBusMYR15XS/PzY9W+H/wBEKKA2ql5/4cPb8ZGHP4AfXM+7ct5M5MnakIbYYe9/Zfy2dhpPgXp0YoaVG+chZ/8A5E5dY4roccu0uJl/vr2bfQst8I6A/wD0cH4RKP4gZOiPgU9P4n/7JfFmP1L9GmglB2o8Le8bn/4vY/Kso8MWb4+1c8f1VL2r+VTPOvin9FmogBkiqdBzaCpAPnHzf4E/QYTyY+TtHoYuM4fPs/Vl58vj9/icEnS2O4+i0TVbquuFJ5OdOPNGfLmaZIODpiaNDyyqGoWwKggLYs+9e59Lzctp6MvmOluMnY58vPMcy8hSff0B9Q1+lCGH4PmvmiV1Te0+0EbDIAb++70god+fTngHIRgk60v2EenmaFqjJMzWXcebaaJCD53yx/D0N2qy+hSVvkU9TKWYsTZPJJ/ePf8AC7r5Zdcjqxqo0RTWaJHv788nnnv7fhgivFkaYREfI7l/gofZPtEU3isU37QtKVqyF5vcOfyqhmC4n19LWxyY+0/8vdzjS5HEuBnQ6O+aQ0YKocVxRLjsRSJlWjKURgGVKIlQZY2iNdMhlZRImXKmLQlYFBWBQ0rkFHEaRgq0JWQRQVgUFYFBWBQVgUFYFBWBRqwkHys/I7CS0dSO2yXmq/rUPlghol+zyCUn728EEN5S4b0NcEk9mBomjd8ZFkWqGKpkRYwa3UffjfL6DknkcDuayeQqnf50JpIqHhhQsQPmt1BZh28VhfP/ACxyPrzkEefU6L4M+GptdL4MZVIhRkdE2qq+3PmdjzQY+npRzjnN5HpjyN5OHDQ7zJu+i/Pn8D3jofRYNJGIoECj1P7Tn9529T/kUMvGKiqR4WfiMmeWqb+y9hb1UpRC4RnrnatbiPWge5r09csYnn3SoNc3UYZNQ05VSwDtDHHGwERJW1BcWz2FPBANsWQUBSXT6+KbU7WniMjblnEURZwXIFwpCxcKaUu3mAksDYLIHcfDrzpHIdY/mV/vEjYF2I3D7EDAEsN1enp2AGxDMrqGRgynsykEH6EYBw/x78BJqg2o06hNQOSBwsv19n9m9fX3GU8f+6PM9TguP0f48u8fp/x5fA8ZjidX54dWrvslUjg96DHuKPm9M6cOXWqfM9icFH2fFEe2RXby2r/eUDaePNew/dcVuA+tcZuzKVNEYXciIpq6JPoAry0eOf2+w5JqucLbmV5N3+ciwIqBjCsiD7xJVGc+zseEH9Tn8Tzi+pZPq/z2fckkR1A8Pwk9j5Vb/vmIb8qGTfiXtP8AVb/PBGfrInuywc8350cjn0pmOLJTXgVUXLJGsYndfo6674TfZZD5HNxk/syH9n6N/P65z8Ri21I83tLg7j3sfeN618FltW6xsiRuplXcPYgOigeikg/IMO+VjxFQ3VlMXaFYVqVtbHDstMRYNEix2NcWD6jOlOz0oO9xwGXNaGMMqyjRlt3P1zhPkKASkAgGg1A/MA3/ADGBQBj/AJJwKJW1AsHYq1+6ZDfy87kZKdOzbhnpyxZJG5blUc/Rb/ll+/Xgev6SvAYNQPY5HfLwJ9IXgTlc6KOmhpXIoq4jduQVoSsEUFYFBWBQEYYoKwKErAo2FjF2CC1dlYv+f6sg5BXp+fcSXVHbt2hT6UVFH5oOAfmAD73igoblddUeT2LXZ7eUkkgH0BJN/IV6nJotoLnT9G08iIoLOWCooK7bY0FAHbmv55zcROlpXU1wwVuUtkt2fQuk6CdH09oNO7pKELGWKNHkaUCyVjk8rXW0KfShY75WEdKo8DiuIlnyOb5dF4I4ODr/AFFgo+26nxf9mDwmLRRsrytqC8bmWBfBcxwptU7qaQC2XzZY5y2nXdYYnYavWll8U34ehG1RqJoELRnTWQoRRIQfKzdqugOob7e+hiME7vMZSHkYadXMe914Jj8NKpbPhsSAQBZsAYMOs6qYVlk1m1TOkLSRJp9gc686SVQskRYUtbG57HcCaOAO6sdRPoemkzSzzPMxcJ9lHiyx6bVShVLxGIqskQ2sVIoBuWCkAY/RtRrU3OdXJGkupdGmj0ujjUNF4u5JFaANJKVhMYYhKdkBB7YB1fwf1PUS6kLJPqHjbTGRRMNKUYmRVDI8MKGx5lKnsfQgqSBh/pX+EmZ01enjLM5CyIi7iWryyba54FH+yffMMj7tqaPb7O4tODxZHVbp+XVfyveck3wf1Ip5dIykfd88XHIP3Wkte18UOPu50+l4f3fJ/Y19Jw3+r6/Ywdd0/U6UnxdPJFZIBIKrXJ2q/bkk2Qe3Hqc1hlx5P0uzaMseTk7KtA0zFyB2CopRfp5qzU2XkWvFG3cGkC+/gxlfzsDFeIcd96+LIZ5Qexif3DIqE+53KFr6bjgin5oomr4FfIHj8Ly6N4ImUcZerR06VKNM9G6Zrh1DRlZATPGGW6NFzGyB7AobgxBH1+WeZkj3U/I+Vz4/Rs+3J/SzzrUdInRirQyAjuNhP8Rwc7Fkg90z2Y58Ulakhn2OX/hv/wBjf4ZbXHxNVlh+5EckLDkqw+oIydSZOqLezMV+5+pzhPjxjH5f+vngDsAQ5D5GmH9aEVj6E/nmZ6FWOaJgLIPcj8Ryf5jFos4SW1FCFCxAzSUtKs8/HBzdI1f9CSGikUhHr+0fyCih86zFcTj5N0dseCkqb5DtLFtBFEc9j9BnZhlcbO3h8ajFpeJIVzU2aErBFBWBQVgUFYFBWBRruu1TvO4j9jtGh9iBQZ/kOB6+oypWrexBqYiPKeZCLb2QAXsA9DXf27e+TZZL4FxtPsbwuCdj1Y4Zo5JbU/IgEfXb7ZBTmtX50O7/AENdLWTVNPRKwJa7uSGksLz8lD/kM4r1ZW/Arx83i4ZR6yfyW7/g9rzU+fMj4kaIx+DMLSY+G33ubBoeUggk1mOfK8cdRpjhr2Iek6dNLEIIaEa3tQ7m2gm6BLE1d8Zx/wBwXkX7klg65G6s6SRsqEhiDQUjkgn0rLenpc0S+HktmiJfiXTtwJYGv08ZeSflXOT6fHqifRZ+D+BcbqKqtsEUD3agPTuRxj+4YyiwSfIim6nC8BkbaUZigBAZWfdtAA/asjOh5dWLVHbwsju2p6WiDXyEGHTFmMkjHlTyqJ5txIrgELz3vj1zGcJuMYSk7vp5F4VvJLYX7XbuPVW21fIAAr8++cPGZ9GXS/cXhjuKZkdQ6vrBN4UGlDIACZpZQqHi6UC2v07fw5zBcRDTbl7uv2No4YVbZD8O/E660SRSQ7HTh428ykbmT1HujCjmudvDTfJ8miZ8PoppnF/H3w9Fp2SeFQEkYqUBKsjUTcbDmqB8psCuB6Z6XZ3HPM3CXTc9DhMkperJ/nmchIjKd6EkGzvSlcD3NcOvufz29s9e7OzZ7P8APt+VYaeJHkrUcKoouoIIq6DKBS/kPx75F+BSVpeoZZUWa7XxmiOuETa6F0CXU2wpIl5eZ+I0A78+p+X51lJ5ow25vwMuI4yGH1ecnyS5nU9K6lHGw0fTtPJqyu93YuE3nygso2ny9hz/AO85J4pT9abo8jPw05/5s8lGxJj1ssTFpSijgIAj7eboknv+WI4cSW7KRxcGlvOyNj13kmI8cnyRcDvzzxlu6wlu74H931MjqEfUtVthems2ER4rYj5BrNd8vBYoO0b4ZcFieqMtzzyTufqf55ifPkb+n1/uOAPwBDkPkaYf1on0WoVD54w6nv7j6Xx/nuMyavqethyqD9aKa8zptTpdMNMNQuqjJNgRXU17iKMfcUAOe3Pc5j3T8T1I8fhcWnFpvrRl/AnRYtQ58SQqaIVQBzYok39cjjc8scfVV+J4XC4G4d6ew/DvQvs0IEzbu9sa4X0F+nYGrPfPkeMzzzeviT6Hc8qfqRf/AGec/HGlCam1AAkQPx27sv8A/OfYdiz1cPXg6+S+51Yo7PY56iO1fiLGerLyIzY5yjUHTGsPlXywmIp1UuYrqPnfr7ZCbKQ1uTtbdBlZNmlBWBQVkDSbA8h3V/R+VF7/AKw+/vt7n50O1ZQjTe3j9BusbbdG6IQH94qd8jfi5HPtkomMb/PgLLIT4co+8ql/x8dz/ff4ZFhQ5x/OR69+h2k0c8tcmbaK9dqIQPzc5wRmoQc5Hn9qpvJjgvC/m/sbfUOqmNSUBlMZHjlGYSJag74wbBruUzzPSm5bS/Poc0cF8/d5hq+riSB1Z18SMRyJJ2SVGI2SV6A9iPT8RnRkzxzcNNS5pb1z9xWOFxyxceT+XijDeVRINSwVGWy5QsxcbdtHgeUcGq7gZ8wp5GnjjvfK9q39p63c7UyGDULKnhyKUDymUoeDJGX3D6+lj5fPO7Tk4XPCeVXGly9hgoLIn3b35EayxgptVEkQ7oyyhRKjDjketEc8kEZPFrNjnJ7uEvl1/PIYYRmvNcxw6mYjJLPKCsgP6jcXF9qW/ccHgDnsMwlF5VCGBO1zk1Rd49K9avLxN/o8eyKPU6pfDjhUeDFXJcit5X94nhV7i/fgfTx3SnLkvm/H7fE8mT3cY83z+33LAnePdqHA+0zio0Y+WCIern0A7sfU0BfGUyZljXey5vZL8+ZaGPX6i/Sub8X5fx8SvJ0xmcMmoPiFQu9ud7iywkHbn0AqqPbOSCx8UtGR2+aLubg7SpeH59SnptRqrdJfCTaxUMu5i9d22k0v8e2eDxqx8PleOLba5/nU7YRUoqS6lWbqWk0W93kAd+XJ5lfk1wB2tjQoDnGP0ri6jCLaWy8EX0N7HDfEnXW1zgVsjRtsYvzB2Fo7EceaitemfWdmcB6LHVJ3J8/sdeDD3frP8XUxBKyHzp2ILoRXPo4/dPof8DWeqdLgpcn7H/Br9L6RHqIgrSEsCQjDixxtQ8Hj69j8s1x49S1b/I+d7U7WycHxHdwUd1e+rnfkWIfhiBWqRm47jcQf/wBeavFtcU/ijzI/1NxOupOKXlGX8ssjQ6fZ4eybZd7DOxS/fbtAvKLh53dIpP8AqCWrUnv4qMf5R0X6PtBEmq3RLtPhOOeeLX9q/wC7K8RjccdtLn5lI9q5uLyaJTbVXTUa+R2PWetJo08TVToqnhVCNvcjk7VBJb8BxnCdBxUn6TOnMzoyalVdSpegy1RXhFkLDg+i4Bd+G/hDpxkh6hpJXl2FvDbxiyDcCrArXBo8jg4B8/y/eb6n+eARP6fX+44A/AAKTwASfYCz+WQ+Rpi/Wi706F1kRngaRAwLIVamHqLA4v3zJo9TFkipb0WOo6Qs7BImRbYolFiqsxIUmrNAgfhlbZvkjCqTIfgzaNVGJBzdAE7ab2N/lRyvHKXcPScvZ0oqdSPal16vsVpQUXcXQMKqjS8dzzY9uM+NePJGM3FO5NU/fz+J2pY1ejnskzhv0hgHVDZyoiUDm+NzGx8uc+o/p9Sjwr17Nyb8OiNsWaCemUlqZh9M0AlbzyCJLALkXyewA/vNAZ62bOsa8zfJBtUvsbnUPh6DTFZHLSC1Vlk3AebgbHj5A/A5wR4yWS1FVL4/U45cOsX+bVty3b2vbqWW+E9PNppZ9PqnPhKzGKVQ10CwKS2DtIUjkHmrIzo4bM5c+a5nL3cuFzxp3Gf58jiSudp6ukAMJig24GkuNIw2kHtuF2CST940eQaIF/L5ZUvoRf8AsBXwg60GeOr9VcsSa9ONn5ZFmV3deZW0YshT6BkHI7vvry9zyfwwzSUa39/wPVv0WaczaCVEfY6ajep+saAWPUGiM854Y5sThI8rtOWjLCX/AI182W4pPs36l6SVjtd/2nZj5ZQD9/vz6j6Z87xmDLhyO7cVuvCuq8v5GOcc3rfIRvD8QsWrwo9jL5VhJko0LuuQDXpYzDFxmXErgv1curpeReWLUqftMxdIL4L6c9yrUyV6la4IHyo/XOxZcWRrvaae2qO1P/yXT2iM8uP9O/k/4JeqacQounmQy15lcBje6jxQPru9Rx75254cRCSjjVxpGGKUMlzcqY19YJ1SDwRajjxUbbtAYUPoduUWbNibedpRp17eiDxQ5we99PqafSejaXTqZ/JLqB/RoRsj3egWx3+Zs8Zpw/FYct3JN81FJr6pX8kZ5Y5Lqml4vd/IvJMd6y6h1lm58NBxDFxztW/O1ev8RmGbtSMblL1mv9q3S/8A1Lk35K/5Jjwze0dl1fV/ZGVr+rANHqXLNG/ccbhKpO3xPkKNKOARfPGcMp5uInJN3Pn7vL85P2nVHFGC08jd+GNGJpDPzsQnwxt2qWb77gd2Jutx57+/Ps9l8PKMNeRVJ/Q87ism+lHOavVTGWZV2KqyyKGa2LbXIJ2igBdjv6Z5HH4sK4iTdt3vW3z3PX4eEu6j7EcL1/SuNQzSlGMiEgqCLCq3obqiq+/pXrn0HZOTFLAowTWnx+J24oJLzszOnymNx2O5ePWiOVv2NqB+Oeq2dOSGqPs/GM6hrmmcyMBZAHF8VXb8vW+5wtiIYlCNI6D4XcrGSLDBybv3CkZ38Mrg/afn/wDVT08bFr9i+sjWklLWSbvvnQklyPmXJvmMySpv/BMoTUM7dlikJ+g2k5y8Z/p+87+zP9f3P+DzGXrD9S1xmnY7WohfRUJuOP6KBZ9zZ9c8s+gNr4k6EhT9WVIAs2VFDj3Irvx9MArfoz6vJpdesBYlJ28NxYIJIYxScftAoVv1DfIZAOBm+83/AFN/M4BE/p9f8cAfgCVfGRLka4FeRJF/TdKdgGX0J3CuVABaz8iAfyOc7nGj3MPCZXNKq8xdSgC7iPyH8crFpm+aEoK2jL6VIFbcR9OOPrm+XU1SPBwNLmzt+hfFMoVY12qoLXf3mu6Bv0+nt3zyuM4NNNtNvY9HHmjs0+Rn67qgLs6SMkn/AE7kcex/dce90eO3fO3hIShBKtjn4+WOb1N+t9fsZkmqllJCEggMx3EAEKLoCgLPt/HOtxT5o4VnyrlJ/FjdR1rUsghLPQsAX5RflJAr/PfM44cadpbm0+M4jL6rlfTkt/b4+86TTdPSdXmaYCTw42lkltURwSjgtXZwFcVfaqyZ5o4mrVvy5np8LhWKXrb1u2/Pk14dU+plTwqDSSxyj96Mkrf1IGbwya1dNe09DFnxZW1B3RFtzSzbSG3FiiTblLNdJZGoNJySUYsL59Eof/icEd0rfmRwHayt7EH8jeC7haaPS/0NdREeqm0x4Eq2vtuiJND+yzH+znLH1ZtHjdq4nLCpftfyf/K+Z6n1XpUc67WFH0YcMD7g5bLijki4yVpngQySg7RwnUvhzUxeXYJoy5dz+0w9mXsfT8hnjZuympasbral5e89XFx8WqmjMg1ah/D4H3vKLUADsGjPF89x7Z5Obh5xVyTvbnz9zO+GiT9VljS9ckMQZTbV5UDcV6cHtx/6zdz4jDPR3kkvPf62UWDFkV6UyLqfUDIJA4VqMagsTRBrlqrgEnK3lyShOc23T6LpfLYlYoQTjFcmvmRtqEi3xqY0baSCuytw4B49yfUm8xeKeRpyuSvzf57i9RSJtNqJZWVBGfFBFBgTRPd2IpQKJzph2XPvHDo+b8jnlxONQ1X7jsuh/CaRHxJj4khJP9RS3favpn0HD8JjwqkvLzPIzcTLIbus1CQRPK1KkaMx+ii/7s6nSRjjhLJNRXNuj590vxRIm/egfczsCDVF2LEfMWTnk5eze/l3idWfYLHJbQW3Je4ztR1B5Zllf0K0B2AB7Z6XC8NHh4aYnRjwtRd82UjnVZ0UIpog+3viyrjZ1PRNS0qvI1Wz81wPuqO2ehwn6H7T83/qyChxcIr9i/8AaRuw6LcFO8DcszAUTxAqtJZ9KDL9b4vJycVGEtLTPFw8BPLj1popRuGAYGwexzoTTVo4pRcXTN/4OiDzsh7NDIp+jbQf55zcZ/pe87uzP9f3P+Dx/UaKXRah4nB3Rfq5K70v3JVB/ZZeR6c55R9Aa0XxLFe5iWK+WNSeFC8KAtWeOeO5J9OMkFz4P0TT9QibbXhN4r+6Bd+xWP7zM5avQAYBws/32/6m/mcgEL+n1/xwB+APhYBgSLF9rr+OVmrizp4OSjng3ys77pXWNHAriOKWSSRCpDlVVQQfMpFkkHkcZxxlGK5H12RTytJNKt/Pmch1LWJNwqlCooCyQa9b9fyGXjFxd9Dg4jiY546XepfAztAhCoe1iwfemYfzBztXifHZ5dEegfDPSZdUQY2BqwR+2o45UEgc8e/Y+2ZcRxSxuqtmXB8NLLfRHT9Q+ENa4W1BKA0SALs3R2kCx6dspDtPJF7p/A6p9mQktnv+ewxOqfDUicMBdByAG3AHu1DtR9Q+d+PtKE16y9/5TOLJwGTG/Vfu/LRh9VE0QEMjNRII3KdxrzDzHk8UbzfLljPFcJWmdvY2D/50FONNX9GcxNqZCZO5U8Mt0qpGSVs9gb7H397zzFBJ21v9+Z6nEcRkWSba5umum1r4rmn42yZ3UBZVBo1dirVieD6Eg+oy99TVzXcx4mKqUXu+Se/Iubc0s+loTbgjSS7crZvpF24snSLtxZNFvpWveCZJ4zTowYH5j0PyPY/InMMy5SXQ5+IxRlFp8mqfs/4PpHofVY9VAmojPlcdvVW/aU/MHjNIytWfF58MsORwl0/LJ9brY4V3yuEWwLPuewyTEyNQnT9StlonBNXY78/l2P5HKuCfMvGco8mcz1PRaGSYImq8NQOUUGj4dWAasECrr0zmycHjnNTaOnHxuSEHFPmS6HpPTWI/2guRbFWLAkAFvOp9KUnn0GWjwmONUuRWXGZJXb5mlC/SY0MieGVSmtVurNbuB24PPyzZY4oweST6moeu6NB4gdasKWCniwWF8cClJ/DLUVs1dLqUkUOjBlN0R2NEg/xBySDzn9MHxGFQaCM+Z6aWvRRyq/Unn6AfvZjld+qj2+yeFbffP2R9vV+785HkNZvFaVR9TGFKh1Zay9ARixQ0jIsqzqfhHT74n86LT/ttV+Ve3Gd3DZNMOTe/T3H57/VWDveNjUkvUXN1/ukdR06CR0VVjY2mtQNaBR48Uac2wPBjJPHqO+edxvaHD4+K7uT32vbyv6HFwHDZZcHcV418WvqZeg6VL4fkjkdQXO4IT952c9h6bq/DPbi4Y/Vcut/E8Kccub11B0klsn02Gab4q0+hmuSRVk2fdYPW1j38qnm1984uLz23Doen2fwqillb3fT89hn/ABP8WdO1pDSOqSKKWaEypIB+7ZTzL8iCM4j1DG0cehldYo9ZIXchQF8NGJ9t4gBH1vJB2fwR1PRgfZ9Ltui7Ebix5oliyjcb9bwDxrUffb/qb+ZyAQv6fX+44Bc0HT5p22QxPIwFkIpND3PsPrgGl/qfr/XSS/kv+POQ+RphaU02MHw9rRyum1Nj1WKT0+YXMq8j1FNLdS39p0PTulSLotv2GcT72JcwSbmHO3jbfAOQ4+R04c0I4/1L5GB0zomoURrJotVQJ31ppSQCbseXn049K+edDe2x8vPG5S8j2L4K6eYVEkMbxGuVlRgWvnmxwb9vT+Pj55Zu8vfy9Wz0MGLFjW3Xzo7bW6mdogPDVXPen3AfQ0L/ACzTi8mVx0ql+fItgUFK2cpqYJze5lHubN/yzSPD1j1W6q/xV/IlODlXX88zzz4yh8yyuzM5VQtgeVa7Cv8APf3zTg5Nx2SS5nRwUIw4+Fu2rXyZx8wZCzqLVhTir4PHI9rP8c62d/H8O8c5TitUZc11T8V9fe9t9khgk1JIRCI4xvcmgAF+vbuBXuRXODGMfSHHHGOjHa2fV+XXf4LmXtuWs+l0ibcWRpJKyptpFrBOkKwKA4IaVbnVfAfxc2glIa2gcjeg7g9t6/1h/Ecegrn3xvyPH7Q4BZY11XJ/w/z+T1XpvVJdX5jpYptOZWCyhwajAJVvDYctdAj0N9qrN001aPlMmOWOTjNU0T6B9Y0gGp0sXh+Y7l2llPAXgsb44v5ZJQrhZ28Q/wCj9M3mQoniJbAlt7s20j9lCD6kkcbbIGppImXYq6VECrwQU8lrupR3rcSPT3ytu+RsoY9NuW/hXn4+zcriCbzgaSBTtUKRtIamA2kccBbPf2ytz8DbRw23rPz2rp7+ovgShXA0enPYhdwUPY81naaNMwF9zfIBvLJy6mWWOJJaG2znut/HTaOJ45NOkeo48ONHDrTAnxH21tAPp3Y+wsis8ij7To4LgZZ3qltHx8fJfmx45q9S8rtLIxZ3JLMe5J9cjHCt3zPssGBQXKvBeCIqzWzooBgJCE+mLIdN0hpTBRwZ1Hwz9hEBE8xSYvIAv2jYSBEXRkj9SzDZ68kfTLxyygtnR8j23gU+JjGcU7Srbfm9r58zqOm68wvDp2ZWCIu9qPLmtzb72m7IqrG3v7fIcRm77/PfrOXlydqq57JLfkWx4o4m8UFUUtv+/Moajrmn0kzxvOA4lnlQUTuEumdI0G0Vw+1a9wD88+l4XiHxGGOR86r4bHnS4RY8ix41+rl7W/ueTddkdp1ZyNxiF1wPvH3OdM5OTtmeXhlw03hTvT4/EqRnnv8AxypmSaVWOohC2W3iq73Y7YB1XRdaumWLUQlN/hAvaVQO3cCb55v+frkrfY34fHCcnq5KLfwRb0UmhaI74oQ7MOWWIMLP9bzfPyg3dZq4+RxqXmZcqwKS3hxuA/H6tKrnuBxfb3u/Sub6ElyK63Zd1nVvB/X6Lwo+CrLHHGARQ2lkJJUkDmwObon058nqnocFgjnck3yVkep+PNeYl/WJ3P8Auo+Kr5fPOVZm5NHp5OzMccEcibt34dK8j1b9FHivpTqZZFYySSf7pVbyttFutbhweK9c6Yu0eVxWJYssoLkjtycscwgYHsb/ABwSGAef/G/WdXHrVg0wUgwq53UB96QGzfyX0zly8JDLPU+dHo4IOPDvLJ1G65XvXtRT1ev1TaBtRuiWbaX2cEhVk2k1u54H0zWGiEe7v3daKvhZZOI0rq0rra6v83ONXSSPsn1TCRn5jgXbGNpupJpL8iey8FquwOT04sEpQuKdfE0x8LLh+K1KauN2661TVK7Zs6DTxohM0cTM3McERdYaS/1s77izi/urfoT6i+fic0MTWNqpdXzr219PoRxnarx5lGORt9W0rV86X/RraTpmpljbesCaZvvVGII9o7NbRh7F8Nt+ecqWRyTi3XW6S+lnLk42cs2OfCucmuet8/JJdDgeo6VYpXjWRZFViBIn3XHoR+HpnZZ93hk8mNScWm+j5oq1g00ktZWzWgrFigrAojnXjBnljaFjXgY5kxhcaZsfD3xHqdE5aB6B+8jco/8A1L/eKPzzHTKO8Tz+K7PjlVNWvmvY/wCD03pX6TtJOhj1KtAzAqSAXQ7hXBA3D8RQ98ssy6nzubsjJF/43flyfz+5o9P6b017aHV2WBB2ahbpgB939k+W7AB+dcZopJ9Tgnw2aH6oNe5mlqui6UlneZxu5P8AtDKo4UcURQ8t128xuxxk2jJQk+SMh+qdL0b+KdYzsu4BFlaX73oVWxxzRb3PyqryRXU6sfZ/ET5Qa9u31OY+I/0pySAx6NDGDx4r0X/sryq/Xn8MzeSUtoo9bhex43c/WfguXvfX5HnbuzsXclmbksxJJJ9STyTkwhW75n0GHCo7v3eC9gojzQ6hfDwQ3QkUdjFlYSTQiQHceMFIta2SfZziy+pCNowSCVFjtYFj6ZJSSg2m0rE/0etVtFe1CsmzF4eHapxj8EPGi+Q+XH8smzT1NtkN1HTYnoyRKzAAWS/YX6A165B4/FdlYs2V5HJpv2ER6VDRURKAe45P8+cizH+x4f3v5Bo+mJE6yRptdTasCbB/HFk/2LD++XyLumtAgCikraCOKDbqr2vFm3D9j4cbbcm7TXTqi1LrmLK5jitd1Up2+ar3C6Pbi8nUU/sPD/ul8vsOPVG/4UP/AGY1E/2Dh/3S+X2MnruoMiElADwP1amqF9wPrlJ20R/bocG9cNTTtPr9FZzfJ8u00L9D8vSv81mTx+ra5nFDNkeZxlehXW3s8FZ3/wAP/FWp00CQxhQq394Puskk9mAzZWkejHsjFnvJl1Jtvbbl06Gh/r7rP+X+Un/nk2y39h4Xxl8V9hB+kDWf8vj5Sf8AniyF2HwjdJy+K+wo+P8AWe0X5Sf+eLZb+wcL4y+K+xjr8QajxzqmYNIQV8wsBT+yB6AYs7MnZuCeBYKqPPbnYx+u6goYy9oSSVoAEGwRY5AokfjmbgnLUWj2dgi7iqaWz/kiTqZW9kMK/MoZD+Hilh/DOuXFZWq1fDb6HIuxsfOc5P4L6K/maUPxZIrGRIIN/wC+ysxHz71f4Z52PhYQm5ttt+LODH/TOBPVKbfuS+5R6p8S6nVjbLKSt3tCqq36E0Ofxzps9Xguz+HwPVjTvlb/ACjMrFno0FYsaR9ZWzWhlc4spXrD6xZehkq8YspkjsKo4xZKVIRTziysXvuPIGGk+ZM8cZfqQhjGU7uJl6LDpa94giGR3USPR1+5/EXaLyVCKI9HgpcrJa4y9m+nYbCMWUxxJwRiy9DWe8Wc87Y5GAxZmotcixE4snJstGLbskkYcfUYsSgyUMuLIcGKrjveQRoAsL9MsmRodkch9eMWHBi8YstoE3LkWToELriy2hjCy4ssoMhkcViyXFpEU1Uciy0o+qyF24r5Ysq36tIWNvTFloO9mOOTZpREg5OLM4R3YrHFl3sBGLLUFZFk0IcWQ1QijjFiKtDIRizPHEkrFmtCLziyI7okIypq0Jt5wRp9YK5wK3BhgNWhu3BXSG3BGkUDBKiKwxZaSEAxZCQrDAcdx1Ystp2Grxgoo0KDglLmNwU0C4GgUHAUBzPiyziJvOLKuABziyFChwlOTZKgIZDkWNFodvxZpoEL4shw3EL4I0jS5wQ0wLYJasGOCZRGVgz0ABglQHk4s0oaoxZWMd2KV5xY07gRgloXFk1aGEYKNNgBgJUKi4stGNDgMFkhFHGCIqkSbcrZrpDbixpDbixpDbixpDbixpDbixpDbixpDbixpDbixpDbixpCsE0G3BGkNuLGkNuLGkNuLGkNuLGkNuLGkNuLGkNuLGkNuLGkNuLGkNuLGkNuLGkNmLGkNmLGgNmLGgNmLGkNmLGkNmLGkNmLGgNuLGkNuLGkNuLGkNuLGkNuLGkNuLGkNuBpDbgaQ24saSTKmoYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYB//2Q=='
            }]
        },
        {
            logo: 'https://www.rongdhanugroup.com/static/media/BrandLogo.24f5619616b73e7505d92dadd08bdd17.svg',
            title: 'Rongdhanu',
            image: 'https://media.licdn.com/dms/image/v2/D561BAQFZTAOg6wXDVg/company-background_10000/company-background_10000/0/1660122935783/rongdhanu_group_cover?e=2147483647&v=beta&t=b0a634mPP3o6rYCWGUf9pBKpAAgjpFZglu0Okmdb__o',
            ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
            numberOfRatings: 4.0,
            reviewText: '600+ Reviews',
            subcompany: ['Textiles', 'Agriculture', 'Trading', 'Consumer Goods', 'Real Estate'],
            descp: 'Growing Conglomerate',
            jobs: {
                openPositions: 22,
                hiringDepartments: ['Agri-business', 'Merchandising', 'Retail', 'Export'],
                jobTypes: ['Full-time', 'Fieldwork'],
                benefits: ['Sales commissions', 'Harvest bonuses', 'Company housing']
            },
            diversity: {
                femaleWorkforce: '32%',
                diversityPrograms: ['Farmers Employment Program', 'Women in Agriculture'],
                awards: ['Rural Development Award']
            },
            overview: [{
                About: 'Rongdhanu Group combines traditional industries with modern employment practices focused on rural inclusion.',
                Moto: ['Rural employment', 'Fair wages', 'Community development'],
                Business: ['Agriculture', 'Textiles', 'Trading'],
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYdJTaN-C8d-gEVrjFoakDmkxFRsDF2E27Tg&s'
            }]
        },
        {
            logo: 'https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg',
            title: '10 Minutes School',
            image: 'https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/uploads/1618824591.jpg',
            ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
            numberOfRatings: 4.0,
            subcompany: ['EdTech', 'Online Courses', 'Test Preparation', 'Skills Development', 'Corporate Training'],
            reviewText: '1000+ Reviews',
            descp: 'Education Innovator',
            jobs: {
                openPositions: 15,
                hiringDepartments: ['Content Creation', 'Instructional Design', 'Digital Marketing', 'Software Development'],
                jobTypes: ['Full-time', 'Remote', 'Freelance'],
                benefits: ['Learning stipend', 'Flexible schedule', 'Creative freedom']
            },
            diversity: {
                femaleWorkforce: '45%',
                diversityPrograms: ['Youth Employment', 'Disability-Friendly Workplace', 'Regional Hiring'],
                awards: ['Best Digital Workplace 2023']
            },
            overview: [{
                About: '10 Minute School leads Bangladesh\'s EdTech revolution with a diverse team of educators and technologists.',
                Moto: ['Learning culture', 'Remote flexibility', 'Youth empowerment'],
                Business: ['Online education', 'Skill courses', 'Test prep'],
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_NZ8K_cW-hGdfCLQUGTwgt89C91frCEUhHjEy-xImLTmktF6fS4MAfptg5aX_l1G6FPE&usqp=CAU'
            }]
        }
    ];
    const button = [
        'OverView', 'Why Join Us', 'Jobs', 'Diversity'
    ]
    useEffect(() => {
        const filteredCards = cards.filter(card =>
            card.title.toLowerCase().includes(title.toLowerCase())
        );
        setCompany(filteredCards);
    }, [title]);

    return (
        <div>
            {company.map((comp, index) => (
                <div key={index}>
                    <img className='w-full h-90' src={comp.image} alt="" />
                    <div className='px-10 flex mt-10 gap-4' >
                        <img className='w-50 h-40  border border-gray-400 rounded-xl' src={comp.logo} alt={comp.title} />
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-2 items-center'>
                                <h2 className='font-bold text-3xl'>{comp.title}</h2>
                                <img className='w-4' src={comp.ratings} alt="" />
                                <p className='text-lg text-gray-600'>{comp.numberOfRatings}</p>
                                <p className='text-gray-600 text-lg'>({comp.reviewText})</p>
                            </div>
                            <div>
                                <p className='text-gray-600'>{comp.des}</p>
                            </div>
                            <div className='flex gap-2 '>
                                {comp.subcompany.map((company, index) => (
                                    <div key={index} className=' border px-2 py-1 rounded-2xl' >
                                        {company}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className='flex gap-2 px-10 '>
                {button.map((btn, index) => {
                    return (
                        <button onClick={() => setActiveButton(index)} key={index} className={`cursor-pointer mt-5 px-5 py-1 ${activeButton === index ? 'border-b-3' :
                            ''
                            }`}>
                            {btn}
                        </button>)
                })}
            </div>
            <div className='px-10 flex gap-3'>
                <div className='w-2/3'>
                    {company.map((comp, compIndex) => (
                        <div key={compIndex}>
                            {comp.overview?.map((p, overviewIndex) => (
                                <div key={overviewIndex}
                                    className={`shadow-2xl px-5 py-5 mt-3 rounded-2xl ${activeButton === 0 ? 'block' : 'hidden'
                                        }`}>
                                    {/* Overview tab content */}
                                    <div>
                                        <h2 className='text-xl font-bold mb-4'>About Us</h2>
                                        <div className='flex gap-5 mt-5'>
                                            {p.image && (
                                                <img className='w-100 h-50 rounded-2xl' src={p.image} alt="" />
                                            )}
                                            <p>{p.About}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Why Join Us tab content */}
                            <div className={`shadow-2xl px-5 py-5 mt-3 rounded-2xl ${activeButton === 1 ? 'block' : 'hidden'
                                }`}>
                                <h2 className='text-xl font-bold mb-4'>Why Join This Company</h2>
                                {comp.overview?.[0]?.Moto && (
                                    <div>
                                        <h3 className='font-semibold mb-3'>Company Facilities:</h3>
                                        <ul className='list-disc pl-5 space-y-2'>
                                            {comp.overview[0].Moto.map((facility, index) => (
                                                <li key={index}>{facility}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>


                            {/* Jobs Tab - UPDATED CONTENT */}
                            <div className={`shadow-2xl px-5 py-5 mt-3 rounded-2xl ${activeButton === 2 ? 'block' : 'hidden'}`}>
                                <div className='flex justify-between items-center mb-6'>
                                    <h2 className='text-xl font-bold'>Jobs at {comp.title}</h2>
                                    <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full'>
                                        {comp.jobs?.openPositions || 0} Open Positions
                                    </span>
                                </div>

                                {comp.jobs && (
                                    <div className='space-y-6'>
                                        <div>
                                            <h3 className='font-semibold text-lg mb-3'>Hiring Departments</h3>
                                            <div className='flex flex-wrap gap-2'>
                                                {comp.jobs.hiringDepartments?.map((dept, index) => (
                                                    <span key={index} className='bg-gray-100 px-3 py-1 rounded-full'>
                                                        {dept}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className='font-semibold text-lg mb-3'>Job Types</h3>
                                            <div className='flex flex-wrap gap-2'>
                                                {comp.jobs.jobTypes?.map((type, index) => (
                                                    <span key={index} className='bg-green-100 text-green-800 px-3 py-1 rounded-full'>
                                                        {type}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className='font-semibold text-lg mb-3'>Employee Benefits</h3>
                                            <ul className='list-disc pl-5 space-y-2'>
                                                {comp.jobs.benefits?.map((benefit, index) => (
                                                    <li key={index}>{benefit}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'>
                                            View All Job Openings
                                        </button>
                                    </div>
                                )}
                            </div>


                            {/* Diversity Tab - UPDATED CONTENT */}
                            <div className={`shadow-2xl px-5 py-5 mt-3 rounded-2xl ${activeButton === 3 ? 'block' : 'hidden'}`}>
                                <h2 className='text-xl font-bold mb-6'>Diversity & Inclusion at {comp.title}</h2>
                                {comp.diversity && (
                                    <div className='space-y-6'>
                                        <div className='bg-purple-50 p-4 rounded-lg'>
                                            <h3 className='font-semibold text-lg mb-2'>Workforce Diversity</h3>
                                            <div className='flex items-center gap-4'>
                                                <div className='w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center'>
                                                    <span className='text-2xl font-bold text-purple-800'>
                                                        {comp.diversity.femaleWorkforce || 'N/A'}
                                                    </span>
                                                </div>
                                                <p>Female workforce representation</p>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className='font-semibold text-lg mb-3'>Diversity Programs</h3>
                                            <ul className='list-disc pl-5 space-y-2'>
                                                {comp.diversity.diversityPrograms?.map((program, index) => (
                                                    <li key={index}>{program}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {comp.diversity.awards?.length > 0 && (
                                            <div>
                                                <h3 className='font-semibold text-lg mb-3'>Awards & Recognition</h3>
                                                <div className='flex flex-wrap gap-2'>
                                                    {comp.diversity.awards.map((award, index) => (
                                                        <span key={index} className='bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full flex items-center'>
                                                            <svg className='w-4 h-4 mr-1' fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                                                            </svg>
                                                            {award}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className='bg-gray-50 p-4 rounded-lg'>
                                            <h3 className='font-semibold text-lg mb-2'>Our Commitment</h3>
                                            <p>
                                                {comp.title} is committed to creating an inclusive workplace where all employees
                                                feel valued and empowered, regardless of gender, ethnicity, or background.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    ))}
                </div>
                <div className='w-1/3 flex flex-col'>
                    <div className='flex border border-gray-300 rounded-2xl mt-3 py-5 px-5 h-50'>
                        <div className='w-2/3'>
                            <div className='flex flex-col gap-2 '>
                                <h2 className='text-md'>Love Jobs By Bashundhara?</h2>
                                <p className='text-gray-600 text-sm'>Register with us and let company recruiters find you</p>
                            </div>
                            <button className='bg-red-400 mt-10 text-white px-4 py-2 rounded-full'>Register</button>
                        </div>
                        <div className='w-1/2'>
                            <img className='w-40 ' src="https://static.naukimg.com/s/7/109/assets/images/cp-register.be877ebb.png" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 border border-gray-300 rounded-2xl mt-3 py-5 px-5 '>

                        <h2 className='text-lg font-semibold'>Key Highlights At Basundhara</h2>
                        <div className='flex  gap-5'>
                            <img className='w-13 h-13' src="https://static.naukimg.com/s/7/109/assets/images/img_Skill-ot.00a62188.png" alt="" />
                            <div className=''>
                                <h2 className='font-semibold'>Skill Development</h2>
                                <p className='text-gray-600'>Highly Rated</p>
                            </div>
                        </div>
                        <div className='flex  gap-5'>
                            <img className='w-13 h-13' src="https://static.naukimg.com/s/7/109/assets/images/img_Job-Security-ot.4ec3d090.png" alt="" />
                            <div className=''>
                                <h2 className='font-semibold'>Job Security</h2>
                                <p className='text-gray-600'>Highly Rated</p>
                            </div>
                        </div>
                        <div className='flex  gap-5'>
                            <img className='w-13 h-13' src="https://static.naukimg.com/s/7/109/assets/images/img_Salary-ot.7d8c7157.png" alt="" />
                            <div className=''>
                                <h2 className='font-semibold'>Salary and Benefits</h2>
                                <p className='text-gray-600'>Highly Rated</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FeatureCompanyDetails;