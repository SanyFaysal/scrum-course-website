import React from 'react';

const Card = ({ card }) => {
    const { rating } = card;
    const ratingArray = [];
    if (rating) {
        if (Number(rating) / Math.floor(rating) === 1) {
            for (let index = 0; index < rating; index++) {
                ratingArray.push(index);
            }
        }
        else if (Number(rating) / Math.floor(rating) !== 1) {
            for (let index = 1; index < rating; index++) {
                ratingArray.push(index);
            }
            ratingArray.push("half")
            console.log(ratingArray);
        }
    }

    return (
        <div class="card card-compact shadow-lg ">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title flex items-start">{card.title}
                    <span className='mt-2'>{card.svg}</span>
                </h2>
                <p>{card.desc}</p>

                <div class="rating">
                    <span className='text-xl mt-[-2px] mr-3 font-semibold'>{rating}</span>
                    {
                        ratingArray.map(r => <>
                            {typeof r == 'number' && <input type="radio" name="rating-5" class="mask mask-star-2 bg-primary mx-1 w-4" />}
                            {r === "half" && <input type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-1 mx-1 w-2" />
                            }
                    </>)
                    }
                </div>
                <div class="card-actions justify-start my-2 ">
                    <button class="btn btn-outline btn-primary btn-sm rounded-3xl">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;