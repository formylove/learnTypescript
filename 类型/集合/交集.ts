type Point = {
    x: number;
    y: number;
};
type Name = {
    name: string;
};

type NamedPoint = Name & Point;

function superPlot(point: NamedPoint) {
    console.log(point.name); // Okay.
    console.log(point.x); // Okay.
}



type NameOrPoint = Name | Point;
type MyBoolean = true | false;
type Result = { status: 'ok' } | { status: 'error', reason: string };
export{}