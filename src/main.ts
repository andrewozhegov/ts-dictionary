interface DisctionarySettings {
    timespan: number,
    active_words: number,
    priority_max_value: number,
    priority_increase_value: number,
    priority_decrease_value: number
}

let settings: DisctionarySettings = {
    timespan: 300, // 5 min in sec
    active_words: 5,
    priority_max_value: 20,
    priority_increase_value: 2,
    priority_decrease_value: 1
}

