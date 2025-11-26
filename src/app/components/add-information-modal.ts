import { Component, Output, EventEmitter, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-add-information-modal",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      *ngIf="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      (click)="onOverlayClick($event)"
    >
      <div
        class="bg-white rounded w-full max-w-2xl max-h-[90vh] flex flex-col"
        (click)="$event.stopPropagation()"
      >
        <div
          class="flex items-center justify-between px-8 py-6 border-b border-gray-200 flex-shrink-0"
        >
          <h2 class="text-[22px] font-medium text-[#3F4254]">
            {{ editMode ? "Edit Information" : "Add Information" }}
          </h2>
          <button
            (click)="onClose()"
            class="w-5 h-5 flex items-center justify-center hover:opacity-70 transition-opacity"
            aria-label="Close modal"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.929495 18C0.692391 18 0.455286 17.9099 0.275141 17.7284C-0.0865054 17.3667 -0.0865054 16.7804 0.275141 16.4187L16.4227 0.271235C16.7843 -0.0904116 17.3706 -0.0904116 17.7323 0.271235C18.0939 0.632881 18.0939 1.2192 17.7323 1.58107L1.58498 17.7284C1.40348 17.9087 1.16637 18 0.929495 18Z"
                fill="#3F4254"
              />
              <path
                d="M17.0781 18C16.841 18 16.6042 17.9099 16.4238 17.7284L0.275141 1.58107C-0.0865054 1.2192 -0.0865054 0.632881 0.275141 0.271235C0.636787 -0.0904116 1.22311 -0.0904116 1.58498 0.271235L17.7323 16.4187C18.0939 16.7804 18.0939 17.3667 17.7323 17.7284C17.5508 17.9087 17.3139 18 17.0781 18Z"
                fill="#3F4254"
              />
            </svg>
          </button>
        </div>

        <div class="flex-1 overflow-y-auto px-8 py-6">
          <div class="space-y-6">
            <div>
              <label class="block text-base font-medium text-[#212529] mb-2"
                >Title</label
              >
              <input
                type="text"
                [(ngModel)]="formData.title"
                placeholder="Enter Title"
                class="w-full h-[50px] px-5 border-2 border-[#E9EBEC] rounded placeholder:text-[#C2C3CB] text-base focus:outline-none focus:border-[#009FD8] transition-colors"
              />
            </div>

            <div>
              <label class="block text-base font-medium text-[#212529] mb-2"
                >Type</label
              >
              <div class="relative">
                <select
                  [(ngModel)]="formData.type"
                  class="w-full h-[50px] px-4 pr-10 border-2 border-[#E9EBEC] rounded text-base appearance-none focus:outline-none focus:border-[#009FD8] transition-colors"
                  [class.text-[#C2C3CB]]="!formData.type"
                  [class.text-[#212529]]="formData.type"
                >
                  <option value="" disabled selected hidden>
                    Please Select Type
                  </option>
                  <option value="Standard">Standard</option>
                  <option value="External">External</option>
                </select>
                <div
                  class="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.31068 0.193108C8.57471 -0.0643956 9.00279 -0.0643956 9.26682 0.193108C9.53085 0.450612 9.53085 0.868109 9.26682 1.12561L5.21024 5.0819C4.95429 5.33152 4.54215 5.34026 4.27532 5.10171L0.218738 1.47512C-0.0565142 1.22904 -0.075108 0.811938 0.177206 0.543491C0.42952 0.275045 0.857196 0.25691 1.13245 0.502986L4.71184 3.70297L8.31068 0.193108Z"
                      fill="#434349"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label class="block text-base font-medium text-[#212529] mb-3"
                >Floor Plan Type</label
              >
              <div class="flex gap-4">
                <label
                  class="flex items-center gap-3 cursor-pointer group"
                  [class.opacity-50]="!formData.type"
                >
                  <input
                    type="checkbox"
                    [checked]="formData.floorPlanTypes.includes('mobile')"
                    (change)="toggleFloorPlanType('mobile')"
                    [disabled]="!formData.type"
                    class="w-5 h-5 rounded border-2 border-[#CED4DA] text-[#009FD8] focus:ring-[#009FD8] focus:ring-2 disabled:cursor-not-allowed"
                  />
                  <div class="flex items-center gap-2">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0176 1.83325H10.8176C10.5136 1.83325 10.2676 2.07929 10.2676 2.38325C10.2676 2.68721 10.5136 2.93325 10.8176 2.93325H13.0176C13.3215 2.93325 13.5676 2.68721 13.5676 2.38325C13.5676 2.07929 13.3215 1.83325 13.0176 1.83325Z"
                        fill="black"
                      />
                      <path
                        d="M15.4004 0H6.60039C5.38747 0 4.40039 0.987078 4.40039 2.2V19.8C4.40039 21.0129 5.38747 22 6.60039 22H15.4004C16.6133 22 17.6004 21.0129 17.6004 19.8V2.2C17.6004 0.987078 16.6133 0 15.4004 0ZM16.5004 19.8C16.5004 20.4076 16.008 20.9 15.4004 20.9H6.60039C5.99281 20.9 5.50039 20.4076 5.50039 19.8V2.2C5.50039 1.59242 5.99281 1.1 6.60039 1.1H15.4004C16.008 1.1 16.5004 1.59242 16.5004 2.2V19.8Z"
                        fill="black"
                      />
                      <path
                        d="M11.0004 20.1666C11.6079 20.1666 12.1004 19.6741 12.1004 19.0666C12.1004 18.459 11.6079 17.9666 11.0004 17.9666C10.3929 17.9666 9.90039 18.459 9.90039 19.0666C9.90039 19.6741 10.3929 20.1666 11.0004 20.1666Z"
                        fill="black"
                      />
                      <path
                        d="M8.98359 2.93325C9.28735 2.93325 9.53359 2.68701 9.53359 2.38325C9.53359 2.0795 9.28735 1.83325 8.98359 1.83325C8.67984 1.83325 8.43359 2.0795 8.43359 2.38325C8.43359 2.68701 8.67984 2.93325 8.98359 2.93325Z"
                        fill="black"
                      />
                    </svg>
                    <span class="text-base text-[#212529]">Mobile</span>
                  </div>
                </label>

                <label
                  class="flex items-center gap-3 cursor-pointer group"
                  [class.opacity-50]="!formData.type"
                >
                  <input
                    type="checkbox"
                    [checked]="formData.floorPlanTypes.includes('desktop')"
                    (change)="toggleFloorPlanType('desktop')"
                    [disabled]="!formData.type"
                    class="w-5 h-5 rounded border-2 border-[#CED4DA] text-[#009FD8] focus:ring-[#009FD8] focus:ring-2 disabled:cursor-not-allowed"
                  />
                  <div class="flex items-center gap-2">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.5417 15.5834H20.1667V5.5001C20.1667 4.489 19.3444 3.66675 18.3333 3.66675H3.66665C2.65555 3.66675 1.8333 4.48896 1.8333 5.5001V15.5834H0.458305C0.205004 15.5834 0 15.7884 0 16.0417V16.5001C0 17.5112 0.822207 18.3334 1.83335 18.3334H20.1667C21.1778 18.3334 22 17.5112 22 16.5001V16.0417C22 15.7884 21.795 15.5834 21.5417 15.5834ZM2.75 5.5001C2.75 4.99478 3.16134 4.58344 3.66665 4.58344H18.3333C18.8386 4.58344 19.25 4.99478 19.25 5.5001V15.5834H13.2917H8.70835H2.75V5.5001ZM20.1667 17.4167H1.83335C1.32804 17.4167 0.916695 17.0054 0.916695 16.5001H2.2917H8.51855L8.84263 16.8242C8.92856 16.9101 9.04492 16.9584 9.1667 16.9584H12.8333C12.9551 16.9584 13.0715 16.9101 13.1574 16.8242L13.4814 16.5001H19.7083H21.0833C21.0833 17.0054 20.672 17.4167 20.1667 17.4167Z"
                        fill="black"
                      />
                    </svg>
                    <span class="text-base text-[#212529]">Desktop</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex items-center justify-end gap-4 px-8 py-5 border-t border-gray-200 flex-shrink-0"
        >
          <button
            (click)="onClose()"
            class="flex items-center gap-2 h-9 px-4 rounded bg-[#DEE1EB] text-[#4C546C] font-semibold text-base hover:bg-[#d0d3df] transition-colors"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.620965 12C0.462896 12 0.304826 11.9399 0.184729 11.8189C-0.0563682 11.5778 -0.0563682 11.1869 0.184729 10.9458L10.9497 0.180823C11.1908 -0.0602744 11.5817 -0.0602744 11.8228 0.180823C12.0639 0.421921 12.0639 0.8128 11.8228 1.05405L1.05795 11.8189C0.936954 11.9392 0.778884 12 0.620965 12Z"
                fill="#4C546C"
              />
              <path
                d="M11.3867 12C11.2287 12 11.0707 11.9399 10.9505 11.8189L0.184729 1.05405C-0.0563682 0.8128 -0.0563682 0.421921 0.184729 0.180823C0.425827 -0.0602744 0.816707 -0.0602744 1.05795 0.180823L11.8228 10.9458C12.0639 11.1869 12.0639 11.5778 11.8228 11.8189C11.7018 11.9392 11.5439 12 11.3867 12Z"
                fill="#4C546C"
              />
            </svg>
            <span>Close</span>
          </button>
          <button
            (click)="onSave()"
            class="flex items-center gap-2 h-9 px-4 rounded bg-[#009FD8] text-white font-semibold text-base hover:bg-[#0385b5] transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.7432 3.76582C14.0231 4.01076 14.0485 4.43749 13.7995 4.71384L6.79025 12.4937C6.53996 12.7715 6.11021 12.7892 5.83796 12.5329L1.78194 8.7145C1.529 8.47637 1.50478 8.07957 1.7218 7.8083C1.96127 7.50897 2.40721 7.46777 2.6922 7.7241L5.83913 10.5547C6.11261 10.8007 6.53366 10.7787 6.78005 10.5056L12.8091 3.82096C13.053 3.55046 13.4691 3.52594 13.7432 3.76582Z"
                fill="white"
              />
            </svg>
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class AddInformationModalComponent {
  @Input() isOpen = false;
  @Input() editMode = false;
  @Input() set informationData(data: any) {
    if (data) {
      this.formData = {
        title: data.title || "",
        type: data.type || "",
        floorPlanTypes: data.floorPlanTypes || [],
      };
    }
  }
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  formData = {
    title: "",
    type: "",
    floorPlanTypes: [] as string[],
  };

  onClose() {
    this.resetForm();
    this.close.emit();
  }

  onSave() {
    if (this.validateForm()) {
      this.save.emit(this.formData);
      this.resetForm();
    }
  }

  onOverlayClick(event: MouseEvent) {
    this.onClose();
  }

  toggleFloorPlanType(type: string) {
    const index = this.formData.floorPlanTypes.indexOf(type);
    if (index > -1) {
      this.formData.floorPlanTypes.splice(index, 1);
    } else {
      this.formData.floorPlanTypes.push(type);
    }
  }

  validateForm(): boolean {
    if (!this.formData.title.trim()) {
      alert("Please enter a title");
      return false;
    }
    if (!this.formData.type) {
      alert("Please select a type");
      return false;
    }
    if (this.formData.floorPlanTypes.length === 0) {
      alert("Please select at least one floor plan type");
      return false;
    }
    return true;
  }

  resetForm() {
    this.formData = {
      title: "",
      type: "",
      floorPlanTypes: [],
    };
  }
}
