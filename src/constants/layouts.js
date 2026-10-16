import { SPACER } from './constants'

export const layouts = [
    {
        'entrance': 'A',
        'pattern': [        
            ['A', 'B', 'C', 'D'],
            [SPACER, SPACER, SPACER, 'E'],
        ],
    },
    {
        'entrance': 'A',
        'pattern': [
            ['A', 'B', 'C', 'D'],
            [SPACER, SPACER, 'E', SPACER],
        ],
    },
    {
        'entrance': 'E',
        'pattern': [
            ['A', 'B', 'C', 'D'],
            [SPACER, 'E', SPACER, SPACER],
        ],
    },
    {
        'entrance': 'A',
        'pattern': [
            ['A', SPACER, SPACER],
            ['B', 'C', 'D'],
            [SPACER, 'E', SPACER],
        ],
    },
    {
        'entrance': 'A',
        'pattern': [
            [SPACER, 'A', SPACER],
            ['B', 'C', 'D'],
            [SPACER, 'E', SPACER],
        ],
    },
    {
        'entrance': 'E',
        'pattern': [
            [SPACER, SPACER, 'A'],
            ['B', 'C', 'D'],
            [SPACER, 'E', SPACER],
        ],
    },
    {
        'entrance': 'A',
        'pattern': [
            ['A', 'B', 'C'],
            ['D', SPACER, SPACER],
            ['E', SPACER, SPACER],
        ],
    },
    {
        'entrance': 'A',
        'pattern': [
            [SPACER, SPACER, 'A', 'B'],
            ['C', 'D', 'E', SPACER],
        ],
    },
    {
        'entrance': 'C',
        'pattern': [
            ['A', 'B', 'C'],
            ['D', 'E', SPACER],
        ],
    },
    {
        'entrance': 'C',
        'pattern': [
            ['A', 'B', SPACER, SPACER],
            [SPACER, 'C', 'D', 'E'],
        ],
    },
    {
        'entrance': 'B',
        'pattern': [
            ['A', 'B', 'C'],
            [SPACER, 'D', SPACER],
            [SPACER, 'E', SPACER]
        ],
    },
    {
        'entrance': 'A',
        'pattern': [
            [SPACER, SPACER, 'A'],
            ['B', 'C', 'D'],
            ['E', SPACER, SPACER]
        ],
    },
]