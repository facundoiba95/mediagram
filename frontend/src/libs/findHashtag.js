<<<<<<< HEAD
export const hashtag_regex = /\B#[a-zA-Z0-9_]+\b/

export default (hashtag) => {

    if(hashtag_regex.test(hashtag)){
        return hashtag.match(hashtag_regex)[0]
    } 
=======
export const hashtag_regex = /\B#[a-zA-Z0-9_]+\b/

export default (hashtag) => {

    if(hashtag_regex.test(hashtag)){
        return hashtag.match(hashtag_regex)[0]
    } 
>>>>>>> b3173dc1 (first commit in Ubuntu)
}