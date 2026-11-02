export const lightkeeperChapters = [
 ['THE CALL','A window in the dark.','At the end of the valley, one window still flickers. The keeper has one lantern left.'],
 ['THE OPENING','The mountain remembers.','An old door unlocks. The observatory opens its ribs, revealing the lift that once carried starlight.'],
 ['THE DESCENT','Take the light below.','The keeper lowers the lantern into the heart of the machine. For a moment, nothing happens.'],
 ['THE SPARK','One small light is enough.','The socket catches. Teeth turn. Three broken lenses begin looking for the same point in the sky.'],
 ['THE SIGNAL','Give the dark an answer.','The lenses lock. The observatory folds itself whole, and sends the lantern’s light across the valley.'],
 ['THE REPLY','One window. Then another.','The signal reaches the sleeping village. A street wakes. Then the next. Someone has been waiting.'],
 ['THE HOMECOMING','You were never the last.','A light comes back from the village. The keeper returns to the rooftop. There is enough light now, for everyone.'],
] as const;
export const unit = (n:number) => Math.max(0, Math.min(1,n));
export const easeUnit = (n:number) => {n=unit(n);return n*n*(3-2*n);};
export function lightkeeperState(progress:number) {
 const p=unit(progress);
 const phase=(start:number,end:number)=>easeUnit((p-start)/(end-start));
 return {p,chapter:p<.12?0:p<.27?1:p<.42?2:p<.57?3:p<.72?4:p<.88?5:6,
  open:phase(.12,.27), descend:phase(.27,.40), spark:phase(.40,.46), align:phase(.44,.57),
  close:phase(.57,.66), transmit:phase(.65,.77), village:phase(.75,.90), reply:phase(.88,.95), dawn:phase(.88,.97), returnHome:phase(.87,.95)};
}
