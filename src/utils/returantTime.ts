interface WorkTime {
    start: string;
    end: string;
}

interface Restaurant {
    id: number;
    created_at: string;
    name: string;
    logo: string;
    position: string;
    work_time: WorkTime[];
}
export function restaurantOpen(work_time: WorkTime[]): {
    isOpen: boolean;
    nextOpenTime?: string;
    nextCloseTime?: string;
} {
    const now = new Date();
    const currentDay = now.getDay(); // Sunday - Saturday : 0 - 6
    const currentTime = now.toTimeString().substring(0, 5); // HH:MM format

    const todaysWorkTime = work_time[currentDay];
    if (!todaysWorkTime) {
        return { isOpen: false };
    }

    const { start, end } = todaysWorkTime;

    if (currentTime >= start && currentTime <= end) {
        return { isOpen: true, nextCloseTime: end };
    }

    // Find the next opening time
    for (let i = 1; i <= 7; i++) {
        const nextDay = (currentDay + i) % 7;
        const nextWorkTime = work_time[nextDay];
        if (nextWorkTime) {
            return { isOpen: false, nextOpenTime: nextWorkTime.start };
        }
    }

    return { isOpen: false };
}
