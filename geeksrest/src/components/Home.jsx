import React from 'react'
import './Home.css'
import Drop  from './dropdown'
import {Bing} from './Bing'
import Dropthree from './threedrop'
export const Home = () => {
  return (
    <div className='home'>
      <div className='flex'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAArlBMVEX///90dHT/ugD/TxhauwAApfJwcHBubm5paWlnZ2eZmZidnZ1lZWXs7Ozr8+Zra2z8cVB5w0n/Sw78ZT9vvzfl8v3/tgD/6eb/PQD/RQD8rZ1LtwCw15oAn/Gdz/Snp6W3t7eOjov+xVKBgH/88+X8uyTT09H815ZStfPe3dwsqvF6enrFxcTw8O+vr6+IiIfKysr6uay83KrZ2ddbW1v8WSpkux+v1/b+wkL83qoGSOMRAAAIB0lEQVR4nO2Ze7/cNhGG7UAkeW1HQJomUIrtuhhc37ZsW8r3/2JoRhdfT06c3XD4wfv8s7teWxq9Go1G4ygCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAJ3r/93Z63P0Zvvvr9nq/+8dLmvizvP/xhz4c/RW+++e2eb/780ua+LO8//GbPHyHWIRDrBBDrBBDrBBDrBP8bYuV9UYzXL97NlxarHb6A0RuGKpFCSHHuoUuXnu3oHrHKlNk22c+Xc6my4qxJZxm0iInuif+vY+m55uGqFLF86omnuEesixYG1W+aVIKhr50ZRtKcNOksNWmlVfKUZ12U9GgVO2tbZR7KTrr9XWLZGa3XLV41X43pe2Y+ZXnOorPcaNhdGw0sQ1622xtSa6ZDO3PJNHWyqweIleSrq1M8izVJM3076x9LYaxQ1oRh7JJs58gsVkIo+ibs4mtkFp+17AFiiVVUypOFWEOVye0qfTTTHK5a4y76UCx7Q5uSF+rPtuhesaatNxfuYvy5Fp2lNtNV2a+5+rhYZk8yri6mz+3qTrFEITdTZewVo/hvFStK7pnHe8Uqq3WI73Us0ifFym9NswkUQ5vPX5vmlj/3hLlpdWUr1m3b6Uqsgx0pdJ/nz1y5V6yx0asQ35lV2aZerJECfBh3qpTWWmU1jdXcIotomDKVsWMOY5xo+luO84be8zWVhYXTVJltY2IHGnyA3BD63IlFjs8pYFpVVUldmE/T/FAoQ5LOfbdpYq5kVR61k7lleIBYRaSXIZ7TFxv5t2IVmd/CdWnFEsWQkGYkVp9IP1KR+WXdaT94O4ZhUr4NoaaPiJU8JdaNppb9shZCk9mlSRZVdEvcZqX8vHtzjTVtIgT7w71ipRGtObUwzORVVRBLBMNrFkNqLW3mRWKNfCOJNSbuX7YwKa1WNttUMlYs1iB465da8qfpYcjOedZgvuqLtcfNMYf8PBOmH+7bpbYpzZOwnY8+OTksK58Si2Y3hPiMveBArIq0UnV5vZZd5sSKzewmHTlSQ1rprmyuIwvBudmVlsx0y9t++mkI4iXptekrcmDa1eqJd95usnBEMp+rqMRimfCT30bzmHLxbSlW3OmpydtxTiyo71hdmrYtBU+RFevnt3t+/jF688tXe35Zv7CwYrE0zjrTs7hEB2I11Hni6gKNFyuWNMt5G7FpZWjVtkdf3Dzzcbykye7sguS0XTV+1M8G+JgiErnt5DfLlVhqjIKVHB/lwtw6iHUPTizqwrVFrbZHYnVhbB5eSW6Q/Sruda6VKV5vXDwqH4DpUGUf/6TUIVD4NbBahu557jJxrc/HNPlAsWyspgs03xQddmJR3BeX1cPL6ZrEMiY3ztJKrGzkNsbws/Oh6dPEoo2WVriQHATWYmmfivTSzgc5tQ4N0C1syLvXP+x5/Zfo+1d/3fPqb4dicWORFYm3tp1YK4tmsfwelSwm1/282K3ULBDvS9zL3AZH3fZTxeqa6/XajzWv3mIrVpgo2ixJlpBgrK5G7759vedbI9bXr/Z8fSwW7Un6ajfyJDoSKxWb7dy6o/O1Ye0zPnG0W51M0jyMedEGrRQW5lQG3/Ie4R8LnuVvbW1EoYEszrSteqBY7LW1De/poVjVyq2DWMVszLKQU8f28ZtNdUQWOlmIRYuVZujkcYcTwfoZsTbtPFYsas1kbbFfJzuxptNi8ejyyuaKXNI8Euu0Z9nGs5cUi6KtLHPljdqJdTlehsU8xuUy1PPw25S9yxyMeMxqcRKSp2LW6heN/Fmx5vcf7SNjlt37a6OMS053YtHnJgFaiMVVyzlJ4BAWEonhou1+zqOa26BSUDKcF6tymj8Xsxaz18uHisVZ5ew9O7GahbMciMXpTUgS2LbFkJ0v3Nbph/QCnxRLuVTqY2Jx43PZZIofK1ZhQ3HxhFi0suL5zcawEYuT0lBZIEslDd39vrrkh7Nq71pjqKNtxNpXZldi8bEgfU4seiQc4Tivf6RYtpjsvWMvFh9V3KGircaNWKyD4CpIlHde164YwvgSJ6lXnI9x9iy0EIuLEJ2bjSOxbvRSIM7y58RqE59hUKYtHiyWfU3h487BQZoPWCKZ0kus5hKNb+mW8b91mnb+iExvO5J6LMfaVr4iu6fGWl7SSsk4vAlZiMUZmjlwXn7aihXTyzmZcMknu/rHnhTLjkBVPZ3ZZfVosa56sYEclWg6W6+iI3wo0cxvOvos/GvamYL+IlRjeIDS3sR3+dc4S7FKZW/Y1bNmpAuHHxcrmqtBsnrMbqiFDocCLWWoalXavUwflRBz8c+V9wSfzqQUavFaqI1dXc8c3tw+VGtfkJuGXRuq8yGtk0KHeMe1m009y74LZqRSfpOrpSv+qYW2bWbs5YaH2pW3kotNHYY7xeqLMRzio2sxfy/NH6O9OI5zEjDWWZJkXcHLp1g+TDSpoFd7U+mVGfoLXRHpIucYyslcyuJivma6KsrZJtOH6WJtpmfsF2fLwhrc0B/+Yk4/XP/XyvQkL63dy+8W6/+F3p+1IdbzhOomxHoWSoskRxWIdciyLtr51AxiHZPGvY/z8Vx5g1iHFFImXVqY9Fcv8jyIdUjhs35Okt0rJYh1TK+V9HmsCOngux/+fsA/o+9//W7Pr/96yQH8Z2n74lJNl2KRxwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4NP5N3D99qZvSTAIAAAAAElFTkSuQmCC" alt="" />
          <p>Images</p>
          <p>Vedioes</p>
          <p>Translate</p>
         <p><Dropthree /></p>
       
      </div>

      <div className = 'drop'><Drop /></div>
      <br />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='search'>
           <input className='input' type="text" name="" id="" />
           <img alt = ''src="https://thumbs.dreamstime.com/b/mike-mike-icon-146784248.jpg"/>
   <img alt ='' src="https://previews.123rf.com/images/vasiffeyzullazadeh/vasiffeyzullazadeh1904/vasiffeyzullazadeh190401037/122815761-search-icon-isolated-on-white-background-search-icon-in-trendy-design-style-search-vector-icon-moder.jpg"/>

       </div>
      <div className='bing'><Bing /></div>
     
      
    </div>
  )
}


