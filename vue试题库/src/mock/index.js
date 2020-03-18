import Mock from 'mockjs'
Mock.mock('/subjectList',{
    "subjectList|10":[
        {
            "id|+1": 1,
            "title": "@cword(5,10)",
            "type": "@integer(0,3)",
            author:"@cname",
            createDate:'@datetime',
            "choice": [
                {
                    "id": 11,
                    "choice": "A",
                    "answer": 0
                },
                {
                    "id": 12,
                    "choice": "B",
                    "answer": 1
                },
                {
                    "id": 13,
                    "choice": "C",
                    "answer": 2
                },
                {
                    "id": 14,
                    "choice": "D",
                    "answer": 3
                }
            ],
            "answer": "C",
            desc:'@cword(8,25)'
        }
    ]
})